import { Component, OnInit } from '@angular/core';
import { Pedido } from './pedidos';
import { PedidoService } from './pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pedir',
  templateUrl: './pedir.component.html',
  styleUrls: ['./pedir.component.css']
})
export class PedirComponent implements OnInit {

  


  order_id: number=0;
  user_id: number=0;
  order_status_status_id: number=0;
  cantidad: number=0;
  product_id: number=0;
  

pedido:Pedido=new Pedido(this.order_id,this.user_id,this.order_status_status_id,this.cantidad,this.product_id);

  constructor(private pedidoService:PedidoService, private router:Router, private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
            if(id){
              this.pedidoService.get(id).subscribe(
                es=> this.pedido=es
              );
            }
      }
    )
  }

  create():void{
    console.log(this.pedido);
    this.pedidoService.create(this.pedido).subscribe(
      res=> this.router.navigate(['/pedido'])
    );
  }

}