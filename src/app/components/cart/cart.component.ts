import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  filterPost='';

  product!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      p => this.product=p
    );
  }

  delete(product: Product):void{
    console.log("Delete");
    this.productService.delete(product.product_id).subscribe(
      res=>this.productService.getAll().subscribe(
        response=> this.product=response
      )
    );
  }

  update(product:Product){
    console.log("Update");
    this.productService.update(product).subscribe(
      res=>this.productService.getAll().subscribe(
        response=>this.product=response
      )
    );
  }

  create(product: Product){
    console.log("Create");
    this.productService.create(product).subscribe(
      res=>this.productService.getAll().subscribe(
        response=>this.product=response
      )
    );

  }

}

