package com.content.content.repository;

import com.content.content.entity.Draft;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface DraftRepository extends JpaRepository<Draft, UUID> {

    List<Draft> findByContentIdOrderByVersionDesc(UUID contentId);

    @Query("SELECT COALESCE(MAX(d.version), 0) FROM Draft d WHERE d.content.id = :contentId")
    int findMaxVersionByContentId(@Param("contentId") UUID contentId);
}