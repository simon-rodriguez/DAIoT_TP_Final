import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../Interfaces/dispositivos';
import { DispositivoService } from '../services/dispositivo.service';
import { Medicion } from '../Interfaces/mediciones';

@Component({
    selector: 'app-dispositivo',
    templateUrl: 'dispositivo.page.html',
    styleUrls: ['dispositivo.page.scss'],
  })

export class DispositivoPage {

    dispositivoId: string = '';
    dispositivos: any = [];
    mediciones: any = [];

    // Verificadores
    readyDatos: boolean = false;
    readyTabla: boolean = false;

    // Para el Highcharts
    private valorObtenido:number=0;
    private aperturaValvula: number = 1;
    public valvulaAbierta = false;
   
    
    intervalo: any;



    constructor(private _DispositivoService: DispositivoService, private rutaActiva: ActivatedRoute) {
//x93        this.dispositivoId = this.rutaActiva.snapshot.paramMap.get('id')!;
//x93        console.log(`ID del dispositivo ${this.dispositivoId}`);
//x93        this.getMedicionLog();
//x93        setTimeout(()=>{
//x93            this.valorObtenido = parseFloat(this.mediciones[0].valor)
//x93            console.log("Medicion Inicial ", this.valorObtenido);
//x93          },3000);
    }

    async ngOnInit() { 
        this.dispositivoId = this.rutaActiva.snapshot.paramMap.get('id')!;
        console.log(`Cargando ${this.dispositivoId}`);
        try {
            console.log('Obteniendo Datos del Dispositivo...')
            const respuesta = await this._DispositivoService.getDispositivo(this.dispositivoId);
            console.log('respuesta recibida dispositivo');
            this.dispositivos = respuesta;
            this.readyDatos = true;
        } catch (error) {
            console.log("error encontrado");
            console.log(error);
            this.readyDatos = false;    
        }
        try {
            console.log('Obteniendo Últimas mediciones...')
            const respuesta = await this._DispositivoService.getUltimasMediciones(this.dispositivoId);
            console.log('respuesta recibida mediciones');
            this.mediciones = respuesta;
            this.readyTabla = true;
        } catch (error) {
            console.log("error encontrado");
            console.log(error);
            this.readyTabla = false;    
        };

    

/*
     this.intervalo = setInterval(() => {
            this.getMedicionSensor();
            console.log("intervalo iniciado");
            }, 15000);
*/
    }

    ionViewWillEnter () {

    }
    
    // Para el highcharts
    ionViewDidEnter() {
    
    }

    // Optiene la ultima medición en el registro.
    getMedicionLog () {
        this.dispositivoId = this.rutaActiva.snapshot.paramMap.get('id')!;
        this._DispositivoService.getUltimaMedicion(this.dispositivoId)
        .then((respuesta:any) => {
            console.log("getMedicionLog ejecutado")
            console.log(respuesta)
            this.mediciones = respuesta;
            return this.mediciones;
        })
        .catch((error) => {
            console.log(error)
          })
    }

    // Obtiene la última medición en el sensor (o simulación)
    getMedicionSensor () {
        //this.getMedicionLog();
        console.log("Sensor simulado ", this.valorObtenido);
        this.valorObtenido = this.valorObtenido + 1;
        console.log("Nuevo valor: ", this.valorObtenido);
//x93        this._DispositivoService.logUltimaMedicion(this.dispositivoId), this.valorObtenido);
        return this.valorObtenido;
    }

    abrirValvula() {
        this.aperturaValvula = 1;
        console.log("Válvula abierta");
//x93        this._DispositivoService.logAccionarValvula(this.dispositivoId), this.aperturaValvula);
        this.valorObtenido = 0;
        //this.mediciones[0].valor = 0;
        this.valvulaAbierta = true;
    }

    cerrarValvula(){
        console.log("Válvula cerrada")
        this.aperturaValvula = 0;
//x93        this._DispositivoService.logAccionarValvula(this.dispositivoId), this.aperturaValvula);
        const ultimaMedicion = this.getMedicionSensor();
 //x93       this._DispositivoService.logUltimaMedicion(this.dispositivoId), ultimaMedicion);
        this.valvulaAbierta = false;
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalo);
    }


// Charts!




}