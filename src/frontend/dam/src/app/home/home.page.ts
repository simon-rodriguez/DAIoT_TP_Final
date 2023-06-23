import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Dispositivo } from '../Interfaces/dispositivos';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dispositivos: Dispositivo[] = [];

  constructor(private _homeService: DispositivoService) {}

  
  async ngOnInit() {
    this._homeService.consulta()
      .then((respuesta:any) => {
        console.log('Primer update');
        console.log('respuesta raw');
        console.log(respuesta);
        this.dispositivos = respuesta
        console.log('respuesta almacenada');
        console.log(this.dispositivos);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getUpdatedDevices() {
    this._homeService.consulta()
    .then((respuesta:any) => {
      console.log('Actualizado');
      console.log(respuesta)
      this.dispositivos = respuesta;
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
