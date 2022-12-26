import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  { path: 'new', component: FormComponent },
  { path: 'update', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})

export class CarnavalRoutingModule {}
