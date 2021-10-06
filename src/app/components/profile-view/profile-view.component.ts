import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "./user";
import { UserService } from "./user.service";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  user: any[] =[];
  
  constructor(private userService: UserService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }
      cargar():void{
        this.activatedRoute.params.subscribe(
          e=>{
            let id=e['id'];
            if(id){
              this.userService.get(id).subscribe(
                //es=> this.user=es
              );
            }
          }
        )
      }

}