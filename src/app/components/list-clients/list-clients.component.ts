import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "./user";
import { UserService } from "./user.service";

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  filterPost='';

  user!: User[];

  constructor(private clientService: UserService) { }

  ngOnInit(): void {
    this.clientService.getAll().subscribe(
      u => this.user=u
    );
  }

}

