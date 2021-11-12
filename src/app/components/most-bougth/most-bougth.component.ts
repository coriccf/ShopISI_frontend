import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-most-bougth',
  templateUrl: './most-bougth.component.html',
  styleUrls: ['./most-bougth.component.css']
})
export class MostBougthComponent implements OnInit {

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
