import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { MedicineComponent } from './medicine/medicine.component';

const routes: Routes = [
  { path: 'medicine', redirectTo: 'product/index', pathMatch: 'full'},
  { path: 'medicine/medicine', component: MedicineComponent  },
  { path: 'medicine/:categoryId/view', component: ViewComponent },
  { path: 'medicine/create', component: CreateComponent },
  { path: 'medicine/:categoryId/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
