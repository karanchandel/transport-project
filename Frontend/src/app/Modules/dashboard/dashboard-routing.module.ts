import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ListOfConsigmentComponent } from './list-of-consigment/list-of-consigment.component';
import { BillityFormComponent } from './billity-form/billity-form.component';
const routes: Routes = [
  {path:'',component:DashboardComponent,},
  {path:'LOC',component:ListOfConsigmentComponent,},
  {path:'billityForm',component:BillityFormComponent,},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
