import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ChipsComponent } from './chips/chips.component';
import { ListOfConsigmentComponent } from './list-of-consigment/list-of-consigment.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BillityFormComponent } from './billity-form/billity-form.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatSelectModule } from '@angular/material/select';
import { AddListOfConsignmentComponent } from './list-of-consigment/add-list-of-consignment/add-list-of-consignment.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    ChipsComponent,
    ListOfConsigmentComponent,
    BillityFormComponent,
    AddListOfConsignmentComponent,

  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSelectModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
