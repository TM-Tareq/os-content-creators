package com.content.content.service;

import com.content.content.dto.ApprovalRequest;
import com.content.content.dto.ApprovalResponse;
import com.content.content.entity.Approval;
import com.content.content.entity.Content;
import com.content.content.entity.User;
import com.content.content.repository.ApprovalRepository;
import com.content.content.repository.ContentRepository;
import com.content.content.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ApprovalService {

    private final ApprovalRepository approvalRepository;
    private final ContentRepository contentRepository;
    private final UserRepository userRepository;
    private final SimpMessagingTemplate messagingTemplate;

    public ApprovalService(ApprovalRepository approvalRepository,
                           ContentRepository contentRepository,
                           UserRepository userRepository,
                           SimpMessagingTemplate messagingTemplate) {
        this.approvalRepository = approvalRepository;
        this.contentRepository = contentRepository;
        this.userRepository = userRepository;
        this.messagingTemplate = messagingTemplate;
    }

    // Author submits content for review — assigns a reviewer
    @Transactional
    public ApprovalResponse submitForReview(UUID contentId, UUID reviewerId) {
        Content content = contentRepository.findById(contentId)
                .orElseThrow(() -> new RuntimeException("Content not found"));
        User reviewer = userRepository.findById(reviewerId)
                .orElseThrow(() -> new RuntimeException("Reviewer not found"));

        content.setStatus("IN_REVIEW");
        contentRepository.save(content);

        Approval approval = new Approval();
        approval.setContent(content);
        approval.setReviewer(reviewer);
        approval.setDecision("PENDING");
        Approval saved = approvalRepository.save(approval);

        // Notify reviewer via WebSocket
        messagingTemplate.convertAndSend(
                "/topic/user/" + reviewerId,
                Map.of(
                        "type", "REVIEW_REQUEST",
                        "contentId", contentId.toString(),
                        "contentTitle", content.getTitle()
                )
        );

        return toResponse(saved);
    }

    // Reviewer approves or rejects
    @Transactional
    public ApprovalResponse decide(UUID approvalId, UUID reviewerId, ApprovalRequest request) {
        Approval approval = approvalRepository.findById(approvalId)
                .orElseThrow(() -> new RuntimeException("Approval not found"));

        approval.setDecision(request.getDecision());
        approval.setComment(request.getComment());
        Approval saved = approvalRepository.save(approval);

        Content content = approval.getContent();
        if ("APPROVED".equals(request.getDecision())) {
            content.setStatus("APPROVED");
        } else if ("REJECTED".equals(request.getDecision())) {
            content.setStatus("REJECTED");
        }
        contentRepository.save(content);

        // Notify the content author in real-time
        messagingTemplate.convertAndSend(
                "/topic/content/" + content.getId(),
                Map.of(
                        "type", "APPROVAL_DECISION",
                        "contentId", content.getId().toString(),
                        "decision", request.getDecision(),
                        "reviewerName", approval.getReviewer().getName(),
                        "comment", request.getComment() != null ? request.getComment() : ""
                )
        );

        return toResponse(saved);
    }

    public List<ApprovalResponse> getByContent(UUID contentId) {
        return approvalRepository.findByContent_Id(contentId).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    private ApprovalResponse toResponse(Approval a) {
        return new ApprovalResponse(
                a.getId(),
                a.getContent().getId(),
                a.getContent().getTitle(),
                a.getReviewer().getId(),
                a.getReviewer().getName(),
                a.getDecision(),
                a.getComment(),
                a.getCreatedAt()
        );
    }
}
