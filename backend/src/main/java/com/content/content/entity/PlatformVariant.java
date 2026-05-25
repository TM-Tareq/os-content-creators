package com.content.content.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "platform_variant")
@Data
public class PlatformVariant {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "content_id", nullable = false)
    private Content content;

    @Column(nullable = false)
    private String platform; // INSTAGRAM | LINKEDIN | X | FACEBOOK | THREADS

    @Column(nullable = false, columnDefinition = "text")
    private String caption;

    @Column(length = 500)
    private String hashtags;

    @Column(name = "created_at", nullable = false, updatable = false)
    private java.util.Date createdAt = new java.util.Date();
}