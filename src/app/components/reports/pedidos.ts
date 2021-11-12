export class Pedido {
  product_name: String= " ";
  details: String= " ";
  size: String= " ";
  cantidad: number=0;

 constructor(product_name: string, details: string,size: string, cantidad: number) {
     this.product_name = product_name;
     this.details = details;
     this.size = size;
     this.cantidad = cantidad;
 }
}

