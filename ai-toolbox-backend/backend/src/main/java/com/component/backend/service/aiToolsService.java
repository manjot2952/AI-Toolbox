package com.component.backend.service;

import com.component.backend.dao.ToolsDao;
import com.component.backend.dao.CategoryDao;
import com.component.backend.model.Tool;
import com.component.backend.model.Category;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class aiToolsService {

    private final ToolsDao ToolsDao;
    private final CategoryDao categoryDao;

    public aiToolsService(ToolsDao ToolsDao, CategoryDao categoryDao) {
        this.ToolsDao = ToolsDao;
        this.categoryDao = categoryDao;
    }

    // Tool methods
    public List<Tool> getAllTools() {
        return ToolsDao.findAll();
    }

    public Tool saveTool(@NonNull Tool tool) {
        return ToolsDao.save(tool);
    }

    // Category methods
    public List<Category> getAllCategories() {
        return categoryDao.findAll();
    }

    public Category saveCategory(@NonNull Category category) {
        return categoryDao.save(category);
    }
}
