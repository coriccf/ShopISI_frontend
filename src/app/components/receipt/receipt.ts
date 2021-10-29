export class Receipt {

    receipt_id: number=0;
    product_id: number=0;
    user_id: number=0;
    card_id: number=0;
    cart_id: number=0;
    date: string="";

    constructor(receipt_id:number,product_id:number,user_id:number, address_id:number,cart_id:number, date:string){
        // ,imagen_id:number[]
        this.receipt_id=receipt_id;
        this.product_id=product_id;
        this.user_id=user_id;
        this.card_id=cart_id;
        this.cart_id=cart_id;
        this.date=date;
    }
}
