import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedidos';
import { PedidoService } from '../pedidos.service';

@Component({
  selector: 'app-less-order',
  templateUrl: './less-order.component.html',
  styleUrls: ['./less-order.component.css']
})
export class LessOrderComponent implements OnInit {

  [x: string]: any;
  filterPost='';
  pedido!: Pedido[];
  //products!: Product[];

  constructor(private http: HttpClient, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getAll().subscribe(
      pe => this.pedido = pe
    );
  }

}
