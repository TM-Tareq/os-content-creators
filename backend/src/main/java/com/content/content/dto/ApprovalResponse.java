package com.content.content.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
public class ApprovalResponse {
    private UUID id;
    private UUID contentId;
    private String contentTitle;
    private UUID reviewerId;
    private String reviewerName;
    private String decision;
    private String comment;
    private Date createdAt;
}
