package net.mdjava.springbootbackend.controller;

import net.mdjava.springbootbackend.exception.ResourceNotFoundException;
import net.mdjava.springbootbackend.model.Patients;
import net.mdjava.springbootbackend.repository.PatientsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/v1/patients")
public class PatientsController {

    @Autowired
    private PatientsRepository patientsRepository;

    @GetMapping
    public List<Patients> index() {
        return patientsRepository.findAll();
    }

    // build create product REST API
    @PostMapping
    public Patients store(@RequestBody Patients patients) {
        return patientsRepository.save(patients);
    }

    // build get product by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Patients> show(@PathVariable long id) {
        Patients patients = patientsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Patient does not exist with id: " + id));
        return ResponseEntity.ok(patients);
    }

    // build update product REST API
    @PutMapping("{id}")
    public ResponseEntity<Patients> update(@PathVariable long id, @RequestBody Patients patientsDetails) {
        Patients updatePatients = patientsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Patient does not exist with id: " + id));

        updatePatients.setName(patientsDetails.getName());
        updatePatients.setAddress(patientsDetails.getAddress());
        // updatePatients.setEmailAddress(patientsDetails.getEmailAddress());
        // updatePatients.setContactNumber(patientsDetails.getContactNumber());

        updatePatients.save(updatePatients);

        return ResponseEntity.ok(updatePatients);
    }

    // build delete product REST API
    @DeleteMapping("{id}")
    public ResponseEntity<Patients> destroy(@PathVariable long id) {
        Patients patients = patientsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Patient does not exist with id: " + id));

        patientsRepository.delete(patients);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
