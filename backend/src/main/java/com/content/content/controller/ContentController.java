package com.content.content.controller;

import com.content.content.dto.ContentRequest;
import com.content.content.dto.ContentResponse;
import com.content.content.dto.DraftResponse;
import com.content.content.service.ContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/content")
public class ContentController {

    private final ContentService contentService;

    public ContentController(ContentService contentService) {
        this.contentService = contentService;
    }

    @PostMapping
    public ResponseEntity<ContentResponse> create(@RequestBody ContentRequest request) {
        return ResponseEntity.ok(contentService.createContent(currentUserId(), request));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContentResponse> get(@PathVariable UUID id) {
        return ResponseEntity.ok(contentService.getContent(id));
    }

    @GetMapping("/team/{teamId}")
    public ResponseEntity<List<ContentResponse>> getByTeam(@PathVariable UUID teamId) {
        return ResponseEntity.ok(contentService.getTeamContent(teamId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ContentResponse> update(@PathVariable UUID id,
                                                   @RequestBody ContentRequest request) {
        return ResponseEntity.ok(contentService.updateContent(id, currentUserId(), request));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<ContentResponse> updateStatus(@PathVariable UUID id,
                                                         @RequestBody Map<String, String> body) {
        return ResponseEntity.ok(contentService.updateStatus(id, body.get("status")));
    }

    @GetMapping("/{id}/drafts")
    public ResponseEntity<List<DraftResponse>> getDrafts(@PathVariable UUID id) {
        return ResponseEntity.ok(contentService.getContentDrafts(id));
    }

    private UUID currentUserId() {
        return UUID.fromString(
                (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal()
        );
    }
}
