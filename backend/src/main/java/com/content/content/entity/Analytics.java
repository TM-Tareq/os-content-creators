package com.content.content.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "analytics")
@Data
public class Analytics {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schedule_id", nullable = false)
    private Schedule schedule;
    @Column(nullable = false)
    private int views = 0;
    @Column(nullable = false)
    private int likes = 0;
    @Column(nullable = false)
    private float score = 0f;
    @Column(name = "collected_at", nullable = false, updatable = false)
    private java.util.Date collectedAt = new java.util.Date();
}
