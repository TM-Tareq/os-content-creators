package com.content.content.service;

import com.content.content.dto.AuthRequest;
import com.content.content.dto.AuthResponse;
import com.content.content.entity.Membership;
import com.content.content.entity.Team;
import com.content.content.entity.User;
import com.content.content.repository.MembershipRepository;
import com.content.content.repository.TeamRepository;
import com.content.content.repository.UserRepository;
import com.content.content.security.JwtUtil;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final TeamRepository teamRepository;
    private final MembershipRepository membershipRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository userRepository,TeamRepository teamRepository,MembershipRepository membershipRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.teamRepository = teamRepository;
        this.membershipRepository = membershipRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @Transactional
    public AuthResponse register(AuthRequest request) {
        if(userRepository.findByEmail(request.getEmail()).isPresent()){
            throw new RuntimeException("Email already exists");
        }
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        User savedUser = userRepository.save(user);

//        Creating a default team for each user after registration
        Team defaultTeam = new Team();
        defaultTeam.setName(request.getName() + "'s workspace");
        defaultTeam.setOwner(savedUser);
        Team savedTeam = teamRepository.save(defaultTeam);

//        Assigning as leader or "OWNER" that user to the team(Basement of RBAC)
        Membership membership = new Membership();
        membership.setUser(savedUser);
        membership.setTeam(savedTeam);
        membership.setRole("OWNER");
        membershipRepository.save(membership);

        String token = jwtUtil.generateToken(savedUser.getId().toString(), savedUser.getEmail());

        return new AuthResponse(token, savedUser.getId().toString());
    }

    public AuthResponse login(AuthRequest request) {
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new RuntimeException("User not found"));

        if(!passwordEncoder.matches(request.getPassword(), user.getPassword())){
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtUtil.generateToken(user.getId().toString(), user.getEmail());

        return new AuthResponse(token, user.getId().toString());
    }
}
