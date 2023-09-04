import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'patient', redirectTo: 'patient/index', pathMatch: 'full'},
  { path: 'patient/index', component: IndexComponent },
  { path: 'patient/:categoryId/view', component: ViewComponent },
  { path: 'patient/create', component: CreateComponent },
  { path: 'patient/:categoryId/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
