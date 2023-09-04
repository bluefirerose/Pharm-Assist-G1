import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './category/index/index.component';
import { PatientComponent } from './category/patient/patient.component';
import { MedicineComponent } from './medcategory/medicine/medicine.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category/index', component: IndexComponent },
  { path: 'category/patient', component: PatientComponent},
  { path: 'medicine', component: MedicineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
