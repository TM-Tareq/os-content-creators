package com.content.content.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "schedule")
@Data
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "variant_id", nullable = false)
    private PlatformVariant variant;

    @Column(nullable = false)
    private String state = "QUEUED"; // QUEUED | PUBLISHING | PUBLISHED | FAILED

    @Column(name = "retry_count", nullable = false)
    private int retryCount = 0;

    @Column(name = "last_error", columnDefinition = "text")
    private String lastError;

    @Column(name = "publish_at", nullable = false)
    private java.util.Date publishAt;

    @Column(name = "created_at", nullable = false, updatable = false)
    private java.util.Date createdAt = new java.util.Date();
}