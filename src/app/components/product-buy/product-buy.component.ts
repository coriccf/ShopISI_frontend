import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.component.html',
  styleUrls: ['./product-buy.component.css']
})
export class ProductBuyComponent implements OnInit {

  [x: string]: any;
  filterPost='';

  cart!: Cart[];

  constructor( private cartService:CartService) { }
  ngOnInit(): void {
  
    this.cartService.getAll().subscribe(
      a => this.cart=a
    );
  }
}
