import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
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

}
