package com.content.content.controller;

import com.content.content.dto.ContentRequest;
import com.content.content.entity.Content;
import com.content.content.entity.Draft;
import com.content.content.service.ContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/content")
public class ContentController {
    private final ContentService contentService;

    public ContentController(ContentService contentService) {
        this.contentService = contentService;
    }

    @PostMapping
    public ResponseEntity<Content> createContent(@RequestBody ContentRequest request) {
        return ResponseEntity.ok(contentService.createOrUpdateContent(null, request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Content> updateContent(@PathVariable UUID id, @RequestBody ContentRequest request) {
        return ResponseEntity.ok(contentService.createOrUpdateContent(id, request));
    }

    @GetMapping("/{id}/history")
    public ResponseEntity<List<Draft>> getContentHistory(@PathVariable UUID id) {
        return ResponseEntity.ok(contentService.getContentHistory(id));
    }
}
