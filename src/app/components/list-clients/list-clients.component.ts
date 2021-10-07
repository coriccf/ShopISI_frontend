import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Client } from "./client";
import { ClientService } from "./client.service";

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  filterPost='';

  client!: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAll().subscribe(
      u => this.client=u
    );
  }

}

