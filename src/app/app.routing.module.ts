import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './carnaval/form/form.component';
import { ListComponent } from './carnaval/list/list.component';

const appRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'new', component: FormComponent },
  { path: 'update', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: [],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
