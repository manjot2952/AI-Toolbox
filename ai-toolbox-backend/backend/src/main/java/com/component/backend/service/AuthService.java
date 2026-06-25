package com.component.backend.service;

import com.component.backend.dao.UserRepository;
import com.component.backend.dto.AuthResponse;
import com.component.backend.dto.LoginRequest;
import com.component.backend.dto.RegisterRequest;
import com.component.backend.exception.InvalidCredentialsException;
import com.component.backend.exception.UserAlreadyExistsException;
import com.component.backend.model.User;
import com.component.backend.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    public void register(RegisterRequest request) {

        if(userRepository.existsByEmail(request.getEmail()))
            throw new UserAlreadyExistsException(
        "Email already exists"
);

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        user.setPasswordHash(
            passwordEncoder.encode(request.getPassword())
        );

        userRepository.save(user);
    }

    public AuthResponse login(LoginRequest request){

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow();

        if(!passwordEncoder.matches(
                request.getPassword(),
                user.getPasswordHash()
        )){
            throw new InvalidCredentialsException(
        "Invalid email or password"
);
        }

        String token =
                jwtService.generateToken(
                        user.getEmail()
                );

        return new AuthResponse(
                token,
                user.getId(),
                user.getName(),
                user.getRole()
        );
    }
}