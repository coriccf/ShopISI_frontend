export class Receipt {

    receipt_id: number=0;
    name: String= " ";
    lastname: String= " ";
    product_name: String= " ";
    cost_product: number=0;
    date: string="";

    constructor(receipt_id:number,name:string, lastname:string, product_name:string, cost_product:number, date:string){
        // ,imagen_id:number[]
        this.receipt_id=receipt_id;
        this.name=name;
        this.lastname=lastname;
        this.product_name=product_name;
        this.cost_product=cost_product;
        this.date=date;
    }
}
