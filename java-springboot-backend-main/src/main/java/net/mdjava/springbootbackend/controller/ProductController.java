package net.mdjava.springbootbackend.controller;

import net.mdjava.springbootbackend.exception.ResourceNotFoundException;
import net.mdjava.springbootbackend.model.Product;
import net.mdjava.springbootbackend.repository.PatientsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @Autowired
    private PatientsRepository productRepository;

    @GetMapping
    public List<Product> index() {
        return productRepository.findAll();
    }

    // build create product REST API
    @PostMapping
    public Product store(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // build get product by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Product> show(@PathVariable long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product does not exist with id: " + id));
        return ResponseEntity.ok(product);
    }

    // build update product REST API
    @PutMapping("{id}")
    public ResponseEntity<Product> update(@PathVariable long id, @RequestBody Product productDetails) {
        Product updateProduct = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product does not exist with id: " + id));

        updateProduct.setName(productDetails.getName());
        updateProduct.setType(productDetails.getType());
        updateProduct.setSize(productDetails.getSize());
        updateProduct.setPrice(productDetails.getPrice());

        productRepository.save(updateProduct);

        return ResponseEntity.ok(updateProduct);
    }

    // build delete product REST API
    @DeleteMapping("{id}")
    public ResponseEntity<Product> destroy(@PathVariable long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product does not exist with id: " + id));

        productRepository.delete(product);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
