import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Client } from "./client";
import { ClientService } from "./client.service";
@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {


  client_id: number=0;
  name: string ="";
  lastname: string="";
  email: string="";
  cellphone: string="";
  telephone: string="";
  address: string="";
  clientname: string="";
  password:string="";
  

client:Client=new Client(this.client_id, this.name,this.lastname,this.email,this.cellphone,this.telephone,this.address,this.clientname,this.password);

  constructor(private clientService:ClientService, private router:Router, private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
            if(id){
              this.clientService.get(id).subscribe(
                es=> this.client=es
              );
            }
      }
    )
  }

  create():void{
    console.log(this.client);
    this.clientService.create(this.client).subscribe(
      res=> this.router.navigate(['/client'])
    );
  }

  update():void{
    this.clientService.update(this.client).subscribe(
      e=>this.router.navigate(['/client'])
    );
  }



}
