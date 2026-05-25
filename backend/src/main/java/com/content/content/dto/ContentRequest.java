package com.content.content.dto;

import lombok.Data;
import java.util.UUID;

@Data
public class ContentRequest {
    private UUID teamId;
    private UUID authorId; // who creates drafts
    private String title;
    private String body;
}