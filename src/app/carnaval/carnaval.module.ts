import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { CarnavalRoutingModule } from './carnaval.routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule, AngularMaterialModule, CarnavalRoutingModule, HttpClientModule
  ],
  exports: [
    ListComponent,
    FormComponent
  ]
})
export class CarnavalModule { }
