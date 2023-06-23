import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformarEstado'
})
export class TransformarEstadoPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 0) {
      return 'Cierre';
    } else if (value === 1) {
      return 'Apertura';
    } else {
      return 'Estado desconocido';
    }
  }

}