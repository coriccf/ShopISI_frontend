export class Cart{

    
    name: String= " ";
    product_name: String= " ";
    cost_product: number=0;
    lastname: String= " ";
    image:String=" ";
    

    constructor(name:string, lastname:string, product_name:string, cost_product:number, image:String){
        // ,imagen_id:number[]
       
        this.name=name;
        this.product_name=product_name;
        this.cost_product=cost_product;
        this.lastname=lastname;
        this.image=image
       
       
    }
}
