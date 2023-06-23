import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Medicion } from '../Interfaces/mediciones';


@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss']
})
export class MedicionesPage implements OnInit {

  mediciones: any = [];
  dispositivoId: string = ''
  ready: boolean = false

  
  constructor(private _MedicionesServices: DispositivoService, private rutaActiva:ActivatedRoute) {}

  ngOnInit() {
    this.dispositivoId = this.rutaActiva.snapshot.paramMap.get('id')!
    console.log(this.dispositivoId)
    this._MedicionesServices.getMedicionesFull(this.dispositivoId)
    .then((respuesta:any) => {
      this.mediciones = respuesta;
      console.log(respuesta);
      this.ready = true;
      console.log("Tabla de Mediciones");
      })
        .catch((error) => {
          console.log(error)
      })

  }


  

}
