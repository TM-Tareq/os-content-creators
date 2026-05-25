package com.content.content.controller;

import com.content.content.dto.ApprovalRequest;
import com.content.content.dto.ApprovalResponse;
import com.content.content.service.ApprovalService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/approval")
public class ApprovalController {

    private final ApprovalService approvalService;

    public ApprovalController(ApprovalService approvalService) {
        this.approvalService = approvalService;
    }

    // Author submits content for review, body: { "reviewerId": "uuid" }
    @PostMapping("/{contentId}/submit")
    public ResponseEntity<ApprovalResponse> submit(@PathVariable UUID contentId,
                                                    @RequestBody Map<String, String> body) {
        UUID reviewerId = UUID.fromString(body.get("reviewerId"));
        return ResponseEntity.ok(approvalService.submitForReview(contentId, reviewerId));
    }

    // Reviewer decides APPROVED or REJECTED
    @PostMapping("/{approvalId}/decide")
    public ResponseEntity<ApprovalResponse> decide(@PathVariable UUID approvalId,
                                                    @RequestBody ApprovalRequest request) {
        return ResponseEntity.ok(approvalService.decide(approvalId, currentUserId(), request));
    }

    // Get all approvals for a content piece
    @GetMapping("/content/{contentId}")
    public ResponseEntity<List<ApprovalResponse>> getByContent(@PathVariable UUID contentId) {
        return ResponseEntity.ok(approvalService.getByContent(contentId));
    }

    private UUID currentUserId() {
        return UUID.fromString(
                (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal()
        );
    }
}
