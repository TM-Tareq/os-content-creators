package com.content.content.repository;

import com.content.content.entity.Membership;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface MembershipRepository extends JpaRepository<Membership, UUID> {
    List<Membership> findByUser_Id(UUID userId);
    Optional<Membership> findByUser_IdAndTeam_Id(UUID userId, UUID teamId);
}
