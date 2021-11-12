export class Cart{

    
    
    product_name: String= " ";
    cost_product: number=0;
    image:String=" ";
    details: String= " ";
    

    constructor( product_name:string, cost_product:number, image:String, details:String){
        
        this.product_name=product_name;
        this.cost_product=cost_product;
        this.image=image
        this.details=details
       
       
    }
}