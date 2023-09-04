package net.mdjava.springbootbackend.repository;

import net.mdjava.springbootbackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
