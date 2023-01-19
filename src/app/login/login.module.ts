import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import {MaterialExampleModule} from '../../material.module';



@NgModule({
  declarations: [
    
    LoginComponent
  ],
  imports: [
    MatSlideToggleModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MaterialExampleModule,
    CommonModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
