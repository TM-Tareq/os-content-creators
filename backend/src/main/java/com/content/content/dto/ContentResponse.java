package com.content.content.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
public class ContentResponse {
    private UUID id;
    private UUID teamId;
    private String teamName;
    private UUID authorId;
    private String authorName;
    private String title;
    private String body;
    private String status;
    private Date createdAt;
}
