export class Card{
  card_id: number=0;
  user_id: number=0;
  card_name: string="";
  card_number: number=0;
  expiration_year: number=0;
  expiration_month: number=0;
  cvc: number=0;
  creation_date: string="";
  status: number=0;

  constructor(card_id:number, user_id:number,card_name:string,card_number:number,expiration_year:number, expiration_month:number,cvc:number,creation_date:string,status:number){
    this.card_id=card_id;
    this.user_id=user_id;
    this.card_name=card_name;
    this.card_number=card_number;
    this.expiration_year=expiration_year;
    this.expiration_month=expiration_month;
    this.cvc=cvc;
    this.creation_date=creation_date;
    this.status=status;
  }

}
