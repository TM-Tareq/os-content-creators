package com.content.content.service;

import com.content.content.dto.ContentRequest;
import com.content.content.entity.Content;
import com.content.content.entity.Draft;
import com.content.content.entity.Team;
import com.content.content.entity.User;
import com.content.content.repository.ContentRepository;
import com.content.content.repository.DraftRepository;
import com.content.content.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ContentService {
    private final ContentRepository contentRepository;
    private final DraftRepository draftRepository;
    private final UserRepository userRepository;

    public ContentService(ContentRepository contentRepository, DraftRepository draftRepository, UserRepository userRepository) {
        this.contentRepository = contentRepository;
        this.draftRepository = draftRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public Content createOrUpdateContent(UUID contentId, ContentRequest request) {
        User user = userRepository.findById(request.getAuthorId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Content content;
        int nextVersion = 1;

        if (contentId == null) {
            content = new Content();
            Team mockTeam = new Team();

            mockTeam.setId(request.getTeamId());
            content.setTeam(mockTeam);
            content.setAuthor(user);
            content.setStatus("DRAFT");
        } else {
            content = contentRepository.findById(contentId)
                    .orElseThrow(() -> new RuntimeException("Content not found"));

            int currentMaxVersion = draftRepository.findMaxVersionByContentId(content.getId());
            nextVersion = currentMaxVersion + 1;
        }

        content.setTitle(request.getTitle());
        content.setBody(request.getBody());
        Content savedContent = contentRepository.save(content);

        Draft draftVersion = new Draft();
        draftVersion.setContent(savedContent);
        draftVersion.setVersion(nextVersion);
        draftVersion.setBody(request.getBody());
        draftVersion.setEditedBy(user);
        draftRepository.save(draftVersion);

        return savedContent;
    }

    public List<Draft> getContentHistory(UUID contentId) {
        return draftRepository.findByContentIdOrderByVersionDesc(contentId);
    }
}