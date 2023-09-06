import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './category/category.module';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './category/patient/patient.component';




@NgModule({
  declarations: [AppComponent, HomeComponent, PatientComponent],
  imports: [BrowserModule, AppRoutingModule, CategoryModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
