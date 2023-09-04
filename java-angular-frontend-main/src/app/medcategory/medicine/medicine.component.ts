import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../medcategory.service';
import { MedCategory } from '../medcategory';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  categories: MedCategory[] = [];
  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((data: MedCategory[])=>{
      this.categories = data;
      console.log(this.categories);
    })

}


   deleteCategory(id:number){
    if(confirm("Are you sure to delete this record?"))
    this.categoryService.delete(id).subscribe(res => {
         this.categories = this.categories.filter(item => item.id !== id);
         alert("Record deleted successfully")
         console.log('Product deleted successfully!');
    })
  }

}

