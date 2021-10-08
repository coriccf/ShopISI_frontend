import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

 /* filterPost='';
    product!: Product[];*/

  product_id: number=0;
  product_name: string= "";
  details: string="";
  size: string="";
  stock: number=0;
  color: number=0;
  quantity:number=0;
  costProduct:number=0;
  status: number= 0;

  product:Product= new Product(this.product_id,this.product_name, this.details, this.size,this.stock, this.color,this.quantity, this.costProduct, this.status);


  constructor(private productService:ProductService, private router:Router, private activatedRoute:ActivatedRoute) { }

/*  ngOnInit(): void {
    this.productService.getAll().subscribe(
      p => this.product=p
    );
  }*/


  ngOnInit(): void {
    this.cargar();
  }
      cargar():void{
        this.activatedRoute.params.subscribe(
          e=>{
            let id=e['id'];
            if(id){
              this.productService.get(id).subscribe(
                es=> this.product=es
              );
            }
          }
        )
      }

      update():void{
        this.productService.update(this.product).subscribe(
          e=> this.router.navigate(['/product'])
        );
      }
      create():void{
        console.log(this.product);
        this.productService.create(this.product).subscribe(
          res=> this.router.navigate(['/product'])
        );
    }


}
