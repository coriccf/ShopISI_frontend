import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Card } from "./card";
import { CardService } from "./card.service";


@Component({
  selector: 'app-card-update',
  templateUrl: './card-update.component.html',
  styleUrls: ['./card-update.component.css']
})
export class CardUpdateComponent implements OnInit {
  card_id: number=0;
  user_id: number=0;
  card_name: string="";
  card_number: number=0;
  expiration_year: number=0;
  expiration_month: number=0;
  cvc: number=0;
  creation_date: string="";
  status: number=0;

  card: Card = new Card(this.card_id, this.user_id, this.card_name, this.card_number, this.expiration_year, this.expiration_month, this.cvc, this.creation_date, this.status);

  constructor(private cardService: CardService, private router: Router, private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void {
    this.cargar();
}

cargar():void{
  this.activatedRoute.params.subscribe(
    e=>{
      let id=e['id'];
          if(id){
            this.cardService.get(id).subscribe(
              es=> this.card=es
            );
          }
    }
  )
}

create():void{
  console.log(this.card);
  this.cardService.create(this.card).subscribe(
    res=> this.router.navigate(['/card'])
  );
}

update():void{
  this.cardService.update(this.card).subscribe(
    e=>this.router.navigate(['/card'])
  );
}


}
