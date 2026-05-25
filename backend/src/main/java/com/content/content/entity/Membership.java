package com.content.content.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Entity
@Table(name = "membership", uniqueConstraints = {@UniqueConstraint(
        columnNames = {
                "user_id", "team_id"
        }
)})
@Data
public class Membership {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id", nullable = false)
    private Team team;
    @Column(nullable = false)
    private String role; // OWNER, EDITOR, REVIEWER
}
