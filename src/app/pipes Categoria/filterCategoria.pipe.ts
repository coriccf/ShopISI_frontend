import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategoria'
})
export class FilterPipe1 implements PipeTransform {
  constructor (private http: HttpClient){}
  
  transform(value: any, arg: any): any {
    console.log(value);
    if (arg === '' || arg.length < 1) return value;
    const resultProduct = [];
    for (let product of value) {
      if (product.categoria_categoria_id==arg) {
        resultProduct.push(product);
      }
      
    };
    
    return resultProduct;

  }


}