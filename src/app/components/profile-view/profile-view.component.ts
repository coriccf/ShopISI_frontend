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

  filterPost='';

  user!: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      u => this.user=u
    );
  }

  delete(user:User):void{
    console.log("Delete");
    this.userService.delete(user.user_id).subscribe(
      res=>this.userService.getAll().subscribe(
        response=> this.user=response
      )
    );
  }

  update(user:User){
    console.log("Update");
    this.userService.update(user).subscribe(
      res=>this.userService.getAll().subscribe(
        response=>this.user=response
      )
    );
  }

}
