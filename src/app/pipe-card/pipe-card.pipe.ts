import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'pipecard'
})
export class PipeCardPipe implements PipeTransform {

  converted!: string;

  transform(card_number: number): any {
    this.converted = card_number.toString();
    const visibleDigits = 4;
    let maskedSection = this.converted.slice(0, -visibleDigits);
    let visibleSection = this.converted.slice(-visibleDigits);
    return maskedSection.replace(/./g, '*') + visibleSection;
  }
}
