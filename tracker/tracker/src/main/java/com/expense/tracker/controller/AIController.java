package com.expense.tracker.controller;

import com.expense.tracker.entity.Expense;
import com.expense.tracker.entity.User;
import com.expense.tracker.repository.ExpenseRepository;
import com.expense.tracker.repository.UserRepository;
import com.expense.tracker.services.GeminiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
public class AIController {

    private final GeminiService geminiService;
    private final ExpenseRepository expenseRepository;
    private final UserRepository userRepository;

    @PostMapping("/chat")
    public String chat(@RequestBody Map<String, String> request,
                       Principal principal) {

        User user = userRepository.findByEmail(principal.getName())
                .orElseThrow();

        List<Expense> expenses =
                expenseRepository.findByUser(user);

        String summary = expenses.stream()
                .map(e -> e.getCategory() + ": " + e.getAmount())
                .reduce("", (a, b) -> a + "\n" + b);

        return geminiService.getChatResponse(
                request.get("message"),
                summary
        );
    }
}
