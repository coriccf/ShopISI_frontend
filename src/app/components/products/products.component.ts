import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  filterPost='';

  products!: Product[];


  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      p => this.products=p
    );
  }

  delete(product:Product):void{
    console.log("Delege");
    this.productService.delete(product.product_id).subscribe(
      res=> this.productService.getAll().subscribe(
        response=> this.products=response
      )
    );
  
  }

}
