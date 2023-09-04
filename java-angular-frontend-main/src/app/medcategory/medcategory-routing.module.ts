import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'medcategory', redirectTo: 'medcategory/index', pathMatch: 'full'},
  { path: 'medcategory/index', component: IndexComponent },
  { path: 'medcategory/:categoryId/view', component: ViewComponent },
  { path: 'medcategory/create', component: CreateComponent },
  { path: 'medcategory/:categoryId/edit', component: EditComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
