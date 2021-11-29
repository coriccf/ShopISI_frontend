export class Product {

  product_id: number=0;
  product_name: string= "";
  details: string="";
  size: string="";
  color: string="";
  costProduct:number=0;
  stock: number=0;
  imagenId:number[]=[];
  categoria_categoria_id: number=0;
  constructor(product_id:number,product_name:string,details:string,size:string,color:string,costProduct:number,stock:number, categoria_categoria_id:number){
      // ,imagen_id:number[]
      this.product_id=product_id;
      this.product_name=product_name;
      this.details=details;
      this.size=size;
      this.color=color;
      this.costProduct=costProduct;
      this.stock=stock;
      this.categoria_categoria_id=categoria_categoria_id;
  }
}

