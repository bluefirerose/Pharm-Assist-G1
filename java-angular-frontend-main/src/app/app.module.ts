import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoryModule } from './category/category.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './category/patient/patient.component';
import { MedcategoryComponent } from './medcategory/medcategory.component';
import { CreateComponent } from './medcategory/create/create.component';
import { EditComponent } from './medcategory/edit/edit.component';
import { ViewComponent } from './medcategory/view/view.component';
import { IndexComponent } from './medcategory/index/index.component';




@NgModule({
  declarations: [AppComponent, HomeComponent, AdminComponent, PatientComponent, MedcategoryComponent, CreateComponent, EditComponent, ViewComponent, IndexComponent],
  imports: [BrowserModule, AppRoutingModule, CategoryModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
