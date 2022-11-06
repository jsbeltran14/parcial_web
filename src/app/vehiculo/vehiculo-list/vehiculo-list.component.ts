import { Component, OnInit, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {


  constructor(
    private vehiculoService : VehiculoService
    ) { }

  vehiculos: Array<Vehiculo> = [];
  renault: number = 0;
  chevrolet: number = 0;
  nissan: number = 0;

  ngOnInit(): void {
    this.getVehiculos();

  }



  getVehiculos(): void{
    this.vehiculoService.getVehiculos()
    .subscribe(vehiculos => {
      this.vehiculos = vehiculos;
      for (let i = 0; i < vehiculos.length; i++) {
        const element = vehiculos[i];
        const marca=element.marca.toLowerCase();
        if(marca=='renault'){
          this.renault++;
        }else if(marca=='chevrolet'){
          this.chevrolet++;
        }else if(marca=='nissan'){
          this.nissan++;
        }

      }
    })
  }

  updateNumbers(): void{
    for (let i = 0; i < 6; i++) {
      const element = this.vehiculos[i];
      const marca=element.marca.toLowerCase();
      if(marca=='renault'){
        this.renault++;
      }else if(marca=='chevrolet'){
        this.chevrolet++;
      }else if(marca=='nissan'){
        this.nissan++;
      }
      console.log(this.renault);
    }
    console.log(this.vehiculos.length)
  }

}
