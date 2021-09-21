import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
      product_id: number=0;
      product_name: string= "";
      details: string="";
      size: string="";
      color: number=0;
      costProduct:number=0;
      status: number= 0;
      
      product:Product= new Product(this.product_id,this.product_name, this.details, this.size, this.color, this.costProduct, this.status); 
      titulo:string="Registro de nuevo producto";

      constructor(private productService:ProductService, private router:Router, private activatedRoute:ActivatedRoute) { }

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

      create():void{
      console.log(this.product);
      this.productService.create(this.product).subscribe(
        res=> this.router.navigate(['/products'])
      );
  }

  update():void{
    this.productService.update(this.product).subscribe(
      e=> this.router.navigate(['/products'])
    );
  }

}
