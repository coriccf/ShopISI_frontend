import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrecio'
})
export class FilterPipe2 implements PipeTransform {
  constructor (private http: HttpClient){}
  
  transform(value: any, arg: any[]): any {
    console.log("Precios"+arg);
    if (arg.length <= 0) return value;
    const resultProduct = [];
    for (let product of value) {
      if (product.costProduct>=arg[0] && product.costProduct<=arg[1]  ) {
        resultProduct.push(product);
      };
        }

    
    return resultProduct;

  }


}