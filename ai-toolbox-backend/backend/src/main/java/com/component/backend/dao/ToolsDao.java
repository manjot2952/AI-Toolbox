package com.component.backend.dao;

import com.component.backend.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;


@Repository
public interface ToolsDao extends JpaRepository<Tool, Long> {
   
    Page<Tool> findByCategoryId(
            Long categoryId,
            Pageable pageable
    );
}

