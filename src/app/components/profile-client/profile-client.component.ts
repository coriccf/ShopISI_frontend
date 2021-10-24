import { Component, OnInit } from '@angular/core';
import { User } from "./user";
import { UserService } from "./user.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.css']
})
export class ProfileClientComponent implements OnInit {

  
  user_id: number=0;
  name: string ="";
  lastname: string="";
  email: string="";
  cellphone: string="";
  telephone: string="";
  username: string="";
  password:string="";
  rol:string="";
  status: number=0;

user:User=new User(this.user_id, this.name,this.lastname,this.email,this.cellphone,this.telephone,this.username,this.password,this.rol,this.status);


  constructor(private userService:UserService, private router:Router, private activatedRoute:ActivatedRoute) { }

/*  ngOnInit(): void {
    this.productService.getAll().subscribe(
      p => this.product=p
    );
  }*/


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

}