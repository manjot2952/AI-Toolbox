package com.component.backend.controller;
import com.component.backend.dto.AuthResponse;
import com.component.backend.dto.LoginRequest;
import com.component.backend.dto.RegisterRequest;
import com.component.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;



@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request){

        authService.register(request);

        return ResponseEntity.ok(
                "Registration successful"
        );
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @RequestBody LoginRequest request){

        return ResponseEntity.ok(
                authService.login(request)
        );
    }
    @GetMapping("/me")
    public ResponseEntity<?> me() {

        Authentication auth =
                SecurityContextHolder.getContext()
                        .getAuthentication();

        return ResponseEntity.ok(auth.getPrincipal());
    }
}