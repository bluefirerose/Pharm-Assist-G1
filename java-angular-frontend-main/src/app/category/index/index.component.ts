import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',

})
export class IndexComponent implements OnInit {

  categories: Category[] = [];
  /*------------------------------------------
    --------------------------------------------
    Created constructor
    --------------------------------------------
    --------------------------------------------*/
  constructor(public categoryService: CategoryService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.categoryService.getAll().subscribe((data: Category[])=>{
      this.categories = data;
      console.log(this.categories);
    })
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
   deleteCategory(id:number){
    if(confirm("Are you sure to delete this record?"))
    this.categoryService.delete(id).subscribe(res => {
         this.categories = this.categories.filter(item => item.id !== id);
         alert("Record deleted successfully")
         console.log('Product deleted successfully!');
    })
  }

}
