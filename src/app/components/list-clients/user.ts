export class User{
  user_id: number=0;
  rol_id: number=0;
  name: string ="";
  lastname: string="";
  email: string="";
  cellphone: string="";
  telephone: string="";
  username: string="";
  password:string="";
  rol:string="";
  status: number= 0;


  constructor(user_id:number,rol_id:number, name:string,lastname:string,email:string,cellphone:string,telephone:string, username:string,password:string,
    rol:string,status:number){
    this.user_id=user_id;
    this.rol_id=rol_id;
    this.name=name;
    this.lastname=lastname;
    this.email=email;
    this.cellphone=cellphone;
    this.telephone=telephone;
    this.username=username;
    this.password=password;
    this.rol=rol;
    this.status=status;
  }
}
