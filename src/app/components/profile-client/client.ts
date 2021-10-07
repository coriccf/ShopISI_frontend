export class Client{
    client_id: number=0;
    name: string ="";
    lastname: string="";
    email: string="";
    cellphone: string="";
    telephone: string="";
    address:string="";
    username: string="";
    password:string="";
  
  
    constructor(client_id:number, name:string,lastname:string,email:string,cellphone:string,telephone:string, address:string, username:string,password:string,
     ){
      this.client_id=client_id;
      this.name=name;
      this.lastname=lastname;
      this.email=email;
      this.cellphone=cellphone;
      this.telephone=telephone;
      this.address=address;
      this.username=username;
      this.password=password;
      
    }
  }
  