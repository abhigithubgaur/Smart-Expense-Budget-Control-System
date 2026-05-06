package com.expense.tracker.repository;

import java.time.LocalDate;
import com.expense.tracker.entity.Expense;
import com.expense.tracker.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    List<Expense> findByUser(User user);

    @Query("SELECT SUM(e.amount) FROM Expense e " +
            "WHERE e.user = :user AND " +
            "MONTH(e.date) = :month AND YEAR(e.date) = :year")
    Double getMonthlyTotal(@Param("user") User user,
                           @Param("month") int month,
                           @Param("year") int year);

}