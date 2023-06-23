import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epochToDateTime'
})
export class EpochToDateTimePipe implements PipeTransform {
  transform(epoch: number): string {
    const date = new Date(epoch); // Convert epoch
    return date.toLocaleString(); // Format the date as a human-readable string
  }
}
