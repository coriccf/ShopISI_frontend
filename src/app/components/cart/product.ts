export class Product {

  product_id: number=0;
  product_name: string= "";
  details: string="";
  size: string="";
  stock: number=0;
  color: string="";
  quantity: number=0;
  costProduct:number=0;
  status: number= 0;
  imagenId:number[]=[];

  constructor(product_id:number,product_name:string,details:string,size:string,stock:number,color:string,quantity:number,costProduct:number,status:number){
      this.product_id=product_id;
      this.product_name=product_name;
      this.details=details;
      this.size=size;
      this.stock=stock;
      this.color=color;
      this.quantity=quantity;
      this.costProduct=costProduct;
      this.status=status;
  }
}

