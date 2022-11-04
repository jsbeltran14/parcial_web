import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class VehiculoModule { }
