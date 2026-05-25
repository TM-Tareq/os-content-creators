package com.content.content.dto;

import lombok.Data;

@Data
public class ApprovalRequest {
    private String decision; // APPROVED | REJECTED
    private String comment;
}
