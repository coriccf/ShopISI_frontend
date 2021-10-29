import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from './pedidos';
import { PedidoService } from './pedidos.service';
import { ProductService } from '../products/product.service'
import { CategoriaService } from '../categorias/categoria.service';
import { Product } from '../products/product';
import { Categoria } from '../categorias/categoria';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  [x: string]: any;
  
  pedido!: Pedido[];
  products!: Product[];
  categoria: Array<Categoria>=[];


  constructor(private http: HttpClient, private pedidoService: PedidoService, private productService:ProductService, private categoriaService:CategoriaService) { }

  

  ngOnInit(): void {
   
     
    this.pedidoService.getAll().subscribe(
      pe => this.pedido = pe
    );

    // this.productService.getAll().subscribe(
    //   p => this.products=p
    // );
    this.categoriaService.getAll().subscribe(
      c => this.categoria=c
    );
    
    this.http.get('http://localhost:8081/producto/id')
    .subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
      }
    )
  }

  update(pedido:Pedido){
    console.log("Update");
    this.pedidoService.update(pedido).subscribe(
      res=>this.pedidoService.getAll().subscribe(
        response=>this.pedido=response
      )
    );
  }
  delete(pedido:Pedido):void{
    console.log("Delete");
    this.pedidoService.delete(pedido.order_id).subscribe(
      res=> this.pedidoService.getAll().subscribe(
        response=> this.pedido=response
      )
    );
  
  }

  create(pedido: Pedido){
    console.log("Create");
    this.pedidoService.create(pedido).subscribe(
      res=>this.pedidoService.getAll().subscribe(
        response=>this.pedido=response
      )
    );

  }




}
