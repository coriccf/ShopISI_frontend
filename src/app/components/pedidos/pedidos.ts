export class Pedido {

  order_id: number=0;
  user_id: number=0;
  order_status_status_id: number=0;
  cantidad: number=0;
  product_id: number=0;

  constructor(order_id:number,user_id:number, order_status_status_id: number, cantidad:number, product_id:number){
      this.order_id = order_id;
      this.user_id = user_id;
      this.order_status_status_id = order_status_status_id;
      this.cantidad = cantidad;
      this.product_id = product_id;
  }
}

