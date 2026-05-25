package com.content.content.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
public class DraftResponse {
    private UUID id;
    private UUID contentId;
    private int version;
    private String body;
    private UUID editedById;
    private String editedByName;
    private Date createdAt;
}
