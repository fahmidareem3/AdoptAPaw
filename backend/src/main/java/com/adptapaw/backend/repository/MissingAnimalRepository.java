package com.adptapaw.backend.repository;

import com.adptapaw.backend.entity.MissingAnimal;
import com.adptapaw.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MissingAnimalRepository extends JpaRepository<MissingAnimal,Long> {

    List<MissingAnimal> findAllByUser(User user);
}