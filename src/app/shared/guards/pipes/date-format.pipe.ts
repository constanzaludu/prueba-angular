import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
// Importar DatePipe en providers de appModule
@Pipe({
  name: 'dateFormater'
})
export class DateFormaterPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  transform(date: Date): string {
    let formatedDate;
    try {
      formatedDate = this.datePipe.transform(date, 'yyyy/MM/dd');
    } catch (error) {
      formatedDate = 'Unknown';
    }
    return formatedDate!;
  }
}
