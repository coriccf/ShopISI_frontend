export class User{

  user_id: number=0;
  rol_id: number=0
  username: string="";
  name_rol: string=" ";
  email: string="";
  name: string ="";
  lastname: string="";


  constructor( user_id:number, rol_id:number, name:string,lastname:string,email:string, username:string,name_rol:string){
   
      this.user_id=user_id,
      this.rol_id=rol_id;
      this.username=username;
      this.name_rol=name_rol;
      this.email=email;
      this.name=name;
      this.lastname=lastname;
  
  }
}
