package com.content.content.service;

import com.content.content.dto.ContentRequest;
import com.content.content.dto.ContentResponse;
import com.content.content.dto.DraftResponse;
import com.content.content.entity.Content;
import com.content.content.entity.Draft;
import com.content.content.entity.Team;
import com.content.content.entity.User;
import com.content.content.repository.ContentRepository;
import com.content.content.repository.DraftRepository;
import com.content.content.repository.TeamRepository;
import com.content.content.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ContentService {

    private final ContentRepository contentRepository;
    private final DraftRepository draftRepository;
    private final UserRepository userRepository;
    private final TeamRepository teamRepository;

    public ContentService(ContentRepository contentRepository, DraftRepository draftRepository,
                          UserRepository userRepository, TeamRepository teamRepository) {
        this.contentRepository = contentRepository;
        this.draftRepository = draftRepository;
        this.userRepository = userRepository;
        this.teamRepository = teamRepository;
    }

    @Transactional
    public ContentResponse createContent(UUID userId, ContentRequest request) {
        User author = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Team team = teamRepository.findById(request.getTeamId())
                .orElseThrow(() -> new RuntimeException("Team not found"));

        Content content = new Content();
        content.setTeam(team);
        content.setAuthor(author);
        content.setTitle(request.getTitle());
        content.setBody(request.getBody());
        content.setStatus("DRAFT");
        Content saved = contentRepository.save(content);

        Draft draft = new Draft();
        draft.setContent(saved);
        draft.setVersion(1);
        draft.setBody(request.getBody());
        draft.setEditedBy(author);
        draftRepository.save(draft);

        return toResponse(saved);
    }

    @Transactional
    public ContentResponse updateContent(UUID contentId, UUID userId, ContentRequest request) {
        Content content = contentRepository.findById(contentId)
                .orElseThrow(() -> new RuntimeException("Content not found"));
        User editor = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        content.setTitle(request.getTitle());
        content.setBody(request.getBody());
        Content saved = contentRepository.save(content);

        int nextVersion = draftRepository.findMaxVersionByContentId(contentId) + 1;
        Draft draft = new Draft();
        draft.setContent(saved);
        draft.setVersion(nextVersion);
        draft.setBody(request.getBody());
        draft.setEditedBy(editor);
        draftRepository.save(draft);

        return toResponse(saved);
    }

    public ContentResponse getContent(UUID contentId) {
        return toResponse(contentRepository.findById(contentId)
                .orElseThrow(() -> new RuntimeException("Content not found")));
    }

    public List<ContentResponse> getTeamContent(UUID teamId) {
        return contentRepository.findByTeam_Id(teamId).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    public List<DraftResponse> getContentDrafts(UUID contentId) {
        return draftRepository.findByContent_IdOrderByVersionDesc(contentId).stream()
                .map(this::toDraftResponse)
                .collect(Collectors.toList());
    }

    @Transactional
    public ContentResponse updateStatus(UUID contentId, String status) {
        Content content = contentRepository.findById(contentId)
                .orElseThrow(() -> new RuntimeException("Content not found"));
        content.setStatus(status);
        return toResponse(contentRepository.save(content));
    }

    private ContentResponse toResponse(Content c) {
        return new ContentResponse(
                c.getId(),
                c.getTeam().getId(),
                c.getTeam().getName(),
                c.getAuthor().getId(),
                c.getAuthor().getName(),
                c.getTitle(),
                c.getBody(),
                c.getStatus(),
                c.getCreatedAt()
        );
    }

    private DraftResponse toDraftResponse(Draft d) {
        return new DraftResponse(
                d.getId(),
                d.getContent().getId(),
                d.getVersion(),
                d.getBody(),
                d.getEditedBy().getId(),
                d.getEditedBy().getName(),
                d.getCreatedAt()
        );
    }
}
