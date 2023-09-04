package net.mdjava.springbootbackend.repository;

import net.mdjava.springbootbackend.model.Patients;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientsRepository extends JpaRepository<Patients, Long> {
}
