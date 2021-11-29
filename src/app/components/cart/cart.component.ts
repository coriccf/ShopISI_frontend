import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from './cart';
import { CartService } from './cart.service';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  [x: string]:any;
  filterPost='';

  cart!: Cart[];
  //cart: any[] = [];
  cartTotal: any[] = [];
  product: Array<Product> = [];

  itemValue = {
    cartDetailId:0
  }

  constructor(private productService: ProductService, cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      p => this.product=p
    );
  }

  get(cart: Cart):void{
    console.log("get");
   // this.cartTotal = data;
    console.log(this.cartTotal);
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

