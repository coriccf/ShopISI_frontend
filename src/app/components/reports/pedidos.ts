export class Pedido {
  product_name: String= " ";
  details: String= " ";
  size: String= " ";
  cantidad: number=0;
  color: String="";

 constructor(product_name: string, details: string,size: string, cantidad: number, color: string) {
     this.product_name = product_name;
     this.details = details;
     this.size = size;
     this.cantidad = cantidad;
     this.color = color;
 }
}

