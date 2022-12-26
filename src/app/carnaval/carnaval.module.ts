import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';



@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule, AngularMaterialModule
  ],
  exports: [
    ListComponent,
    FormComponent
  ]
})
export class CarnavalModule { }
