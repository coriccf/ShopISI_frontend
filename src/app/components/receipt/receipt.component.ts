import { Component, OnInit } from '@angular/core';
import { Receipt } from './receipt';
import { ReceiptService } from './receipt.service';
import { Product } from '../products/product';
import { ProductService } from '../products/product.service';
import { User } from '../user/user-admin/user';
import { UserService } from '../user/user-admin/user.service';
import { Card } from '../card/card';
import { CardService } from '../card/card.service';


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
 [x: string]: any;
  filterPost='';

  receipt!: Receipt[];
  product: Array<Product>=[];
  user: Array<User>=[];
  card: Array<Card>=[];
 

  
  constructor(private productService:ProductService, private receiptService:ReceiptService, private userService:UserService,private cardService:CardService ) { }
  ngOnInit(): void {
    this.productService.getAll().subscribe(
      p => this.products=p
    );
    this.receiptService.getAll().subscribe(
      a => this.receipt=a
    );
    this.userService.getAll().subscribe(
      b => this.user=b
    );
    this.userService.getAll().subscribe(
      c => this.user=c
    );
    this.userService.getAll().subscribe(
      d => this.user=d
    );

    

  }
}
