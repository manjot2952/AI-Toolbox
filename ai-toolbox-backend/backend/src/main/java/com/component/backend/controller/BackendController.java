package com.component.backend.controller;

import com.component.backend.dao.ToolsDao;
import com.component.backend.dao.CategoryDao;
import com.component.backend.model.Tool;
import com.component.backend.model.Category;

  
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;

import java.util.List;

@RestController
public class BackendController {

    private final ToolsDao toolsDao;
    private final CategoryDao categoryDao;

    public BackendController(ToolsDao toolsDao, CategoryDao categoryDao) {
        this.toolsDao = toolsDao;
        this.categoryDao = categoryDao;
    }  

    // Simple greeting
    @GetMapping("/")
    public String greet() {
        return "Hello, World!";
    }

    // Endpoint to fetch all Tools
    @GetMapping("/api/tools")
    public List<Tool> getAllTools() {
        return toolsDao.findAll();
    }

    // Endpoint to fetch all Categories
    @GetMapping("/api/categories")
    public List<Category> getAllCategories() {
        return categoryDao.findAll();
    }
    
    @GetMapping("/api/categories/{id}")
    public Category getCategory(
        @PathVariable Long id
    ) {
        return categoryDao.findById(id)
            .orElseThrow();
    }
    @GetMapping("/api/categories/{id}/tools")
    public Page<Tool> getToolsByCategory(
        @PathVariable Long id,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "12") int size
    ) {

        Pageable pageable =
                PageRequest.of(page, size);

        return toolsDao.findByCategoryId(
                id,
            pageable
        );
}
}
