import { Component, OnInit } from '@angular/core';
import { Receipt } from './receipt';
import { ReceiptService } from './receipt.service';



@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
 [x: string]: any;
  filterPost='';

  receipt!: Receipt[];

  constructor( private receiptService:ReceiptService) { }
  ngOnInit(): void {
  
    this.receiptService.getAll().subscribe(
      a => this.receipt=a
    );
  }
}
