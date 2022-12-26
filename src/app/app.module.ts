import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarnavalModule } from './carnaval/carnaval.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, AngularMaterialModule, BrowserAnimationsModule, CarnavalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
