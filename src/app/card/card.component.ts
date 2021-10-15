import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  filterPost='';

  card!: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getAll().subscribe(
      u => this.card=u
    );
  }

  delete(card:Card):void{
    console.log("Delete");
    this.cardService.delete(card.card_id).subscribe(
      res=>this.cardService.getAll().subscribe(
        response=> this.card=response
      )
    );
  }

  update(card: Card){
    console.log("Update");
    this.cardService.update(card).subscribe(
      res=>this.cardService.getAll().subscribe(
        response=>this.card=response
      )
    );
  }

  create(card:Card){
    console.log("Create");
    this.cardService.create(card).subscribe(
      res=>this.cardService.getAll().subscribe(
        response=>this.card=response
      )
    );

  }


}
