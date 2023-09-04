
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './medcategory-routing.module';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicineComponent } from '../medcategory/medicine/medicine.component';


@NgModule({
  declarations: [ViewComponent, CreateComponent, EditComponent, MedicineComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MedCategoryModule { }
