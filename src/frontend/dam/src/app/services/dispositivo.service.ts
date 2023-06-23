import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  private uri = 'http://localhost:3000'

  constructor(private _http: HttpClient) { }

  // Listado de Dispositivos
  consulta () {
    return firstValueFrom(this._http.get(`${this.uri}/devices`))
  }

  // Obtener un dispositivo específico
  getDispositivo(deviceid:string) {
    return firstValueFrom(this._http.get(`${this.uri}/devices/${deviceid}`))
  }
  
  // Obtener última medición del dispositivo
  getUltimaMedicion(deviceid:string) {
    return firstValueFrom(this._http.get(`${this.uri}/measurements/last/${deviceid}`))
  }

  // Obtener últimas 10 mediciones del dispositivo
  getUltimasMediciones(deviceid:string) {
    return firstValueFrom(this._http.get(`${this.uri}/measurements/last10/${deviceid}`))
  }

  // Obtener todas las mediciones de un dispositivo específico
  getMedicionesFull(deviceid:string){
    return firstValueFrom(this._http.get(`${this.uri}/measurements/${deviceid}`))
  }

  // Obtener todos los registros de riego del dispositivo
  getRegistroRiego(deviceid:string) {
    return firstValueFrom(this._http.get(`${this.uri}/waterlog/${deviceid}`))
  }

  // Insertar accion de electroválvula en el registro
  logAccionarValvula(deviceid:string, aperturaValvula:number) {
    const fechaActual = new Date()
    const soloFecha = fechaActual.toISOString().split('T')[0];
    const soloHora = fechaActual.toISOString().split('T')[1].split('.')[0];
    const fechaFormateada = `${soloFecha} ${soloHora}`
    let body = {
      apertura: aperturaValvula,
      fecha: fechaFormateada,
      electrovalvulaId: deviceid
    }
      this._http.post(`${this.uri}/changestate`, body).subscribe((res) => {
        console.log(res);
      });

  }

  // Insertar última medición en el registro
  logUltimaMedicion(deviceid:number, valorMedicion: number) {
    const fechaActual = new Date()
    const soloFecha = fechaActual.toISOString().split('T')[0];
    const soloHora = fechaActual.toISOString().split('T')[1].split('.')[0];
    const fechaFormateada = `${soloFecha} ${soloHora}`
    let body = {
      fecha: fechaFormateada,
      valor: valorMedicion,
      dispositivoId: deviceid
    }
    this._http.post(`${this.uri}/updatemeasurements`, body).subscribe((res) => {
      console.log(res);
    });
  }

}

