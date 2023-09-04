import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../medcategory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../medcategory';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  category!: Category;
  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public categoryService: MedCategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['categoryId'];
    this.medcategoryService.find(this.id).subscribe((data: Category)=>{
      this.category = data;
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', Validators.required),
      contactno: new FormControl('', Validators.required),
      emailadd: new FormControl('', Validators.required)
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.medcategoryService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Category updated successfully!');
         this.router.navigateByUrl('medcategory/index');
    })
  }

}
