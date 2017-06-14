import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { DataFormComponent } from './data-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    SharedModule,
    HttpModule
  ],
  declarations: [
    DataFormComponent
  ]
})
export class DataFormModule { }
