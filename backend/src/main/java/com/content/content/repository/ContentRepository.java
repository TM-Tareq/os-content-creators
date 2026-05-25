package com.content.content.repository;

import com.content.content.entity.Content;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ContentRepository extends JpaRepository<Content, UUID> {
    List<Content> findByTeam_Id(UUID teamId);
    List<Content> findByStatus(String status);
}
