package net.mdjava.springbootbackend.controller;

import net.mdjava.springbootbackend.exception.ResourceNotFoundException;
import net.mdjava.springbootbackend.model.Medicine;
import net.mdjava.springbootbackend.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/v1/medicines")
public class MedicineController {

    @Autowired
    private MedicineRepository medicineRepository;

    @GetMapping
    public List<Medicine> index() {
        return medicineRepository.findAll();
    }

    // build create product REST API
    @PostMapping
    public Medicine store(@RequestBody Medicine medicine) {
        return medicineRepository.save(medicine);
    }

    // build get product by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Medicine> show(@PathVariable long id) {
        Medicine medicine = medicineRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Medicine does not exist with id: " + id));
        return ResponseEntity.ok(medicine);
    }

    // build update product REST API
    @PutMapping("{id}")
    public ResponseEntity<Medicine> update(@PathVariable long id, @RequestBody Medicine medicineDetails) {
        Medicine updateMedicine = medicineRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Medicine does not exist with id: " + id));

        // updateMedicine.setMedName(medicineDetails.getMedName());
        updateMedicine.setDescription(medicineDetails.getDescription());
        updateMedicine.setQuantity(medicineDetails.getQuantity());
        updateMedicine.setType(medicineDetails.getType());
        // updateMedicine.setExpirationDate(medicineDetails.getExpirationDate());

        medicineRepository.save(updateMedicine);

        return ResponseEntity.ok(updateMedicine);
    }

    // build delete product REST API
    @DeleteMapping("{id}")
    public ResponseEntity<Medicine> destroy(@PathVariable long id) {
        Medicine medicine = medicineRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Medicine does not exist with id: " + id));

        medicineRepository.delete(medicine);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
