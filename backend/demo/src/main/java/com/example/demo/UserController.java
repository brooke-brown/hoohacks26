package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Email already in use."));
        }
        User saved = userRepository.save(user);
        return ResponseEntity.ok(Map.of("message", "User created!", "id", saved.getId()));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");

        Optional<User> user = userRepository.findByEmail(email);
        if (user.isEmpty() || !user.get().getPassword().equals(password)) {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid email or password."));
        }

        return ResponseEntity.ok(Map.of(
            "message", "Login successful!",
            "firstName", user.get().getFirstName(),
            "lastName", user.get().getLastName(),
            "email", user.get().getEmail()
        ));
    }
}
