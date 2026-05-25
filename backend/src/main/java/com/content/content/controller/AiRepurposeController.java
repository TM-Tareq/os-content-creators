package com.content.content.controller;

import com.content.content.entity.PlatformVariant;
import com.content.content.service.AiRepurposeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/ai")
public class AiRepurposeController {

    private final AiRepurposeService aiRepurposeService;

    public AiRepurposeController(AiRepurposeService aiRepurposeService) {
        this.aiRepurposeService = aiRepurposeService;
    }

    @PostMapping("/repurpose/{contentId}")
    public ResponseEntity<List<PlatformVariant>> repurpose(@PathVariable("contentId") UUID contentId) {
        return ResponseEntity.ok(aiRepurposeService.repurposeByContent(contentId));
    }

}