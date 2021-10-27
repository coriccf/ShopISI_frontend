import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "./user";
import { UserService } from "./user.service";
import { Rol } from "../../rol/rol";
import { RolService } from "../../rol/rol.service";



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls:['./user-form.component.css']
})
export class UserFormComponent implements OnInit{
  user_id: number=0;
  rol_id: number=0
  name: string ="";
  lastname: string="";
  email: string="";
  cellphone: string="";
  telephone: string="";
  username: string="";
  password:string="";
  rol:string="";
  status: number=0;
  

user:User=new User(this.user_id,this.rol_id,this.name,this.lastname,this.email,this.cellphone,this.telephone,this.username,this.password,this.rol,this.status);

  constructor(private userService:UserService, private router:Router, private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
            if(id){
              this.userService.get(id).subscribe(
                es=> this.user=es
              );
            }
      }
    )
  }

  create():void{
    console.log(this.user);
    this.userService.create(this.user).subscribe(
      res=> this.router.navigate(['/user'])
    );
  }

  update():void{
    this.userService.update(this.user).subscribe(
      e=>this.router.navigate(['/user'])
    );
  }



}
