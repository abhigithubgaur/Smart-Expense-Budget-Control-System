package com.expense.tracker.controller;

import com.expense.tracker.entity.User;
import com.expense.tracker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class TestController {

    private final UserRepository userRepository;

    @PostMapping("/add")
    public String addUser() {

        User user = User.builder()
                .name("John Doe")
                .email("john@example.com")
                .password("12345")
                .build();

        userRepository.save(user);

        return "User Saved!";
    }
}