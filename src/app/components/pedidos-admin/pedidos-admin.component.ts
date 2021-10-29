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
  selector: 'app-pedidos-admin',
  templateUrl: './pedidos-admin.component.html',
  styleUrls: ['./pedidos-admin.component.css']
})
export class PedidosAdminComponent implements OnInit {
  [x: string]: any;


  
  order_id: number=0;
  user_id: number=0;
  order_status_status_id: number=0;
  cantidad: number=0;
  product_id: number=0;

  pedido!: Pedido[];
  products!: Product[];
  categoria: Array<Categoria>=[];
  pedidos:Pedido= new Pedido(this.order_id, this.user_id, this.order_status_status_id, this.cantidad, this.product_id); 


  constructor(private activatedRoute:ActivatedRoute, private router:Router, private http: HttpClient, private pedidoService: PedidoService, private productService:ProductService, private categoriaService:CategoriaService) { }

  

  ngOnInit(): void {

     
    this.pedidoService.getAll().subscribe(
      pe => this.pedido = pe
    );

    // this.productService.get(this.product).subscribe(
    //   p => this.product=p
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
    this.http.get('http://localhost:8081/pedidos')
    .subscribe((data: any) => {
      this.order_status = data;
      console.log(this.pedidos);
      }
    )
  }
  // update():void{
  //   this.pedidoAdminService.update(this.pedido).subscribe(
  //     ()=> this.router.navigate(['/pedidos'])
  //   );
  // }




  cargar(id:number, h:number):void{ 
    this.pedidoService.get(id).subscribe(
      

      es=> {this.pedidos=es;
        console.log(es);
        console.log(h ,'Imprimiendo h');
        this.update(h);
        }
    
      );
  }
  // update(pedido:Pedido){
  //   console.log("Update");
  //   this.pedidoService.update(pedido).subscribe(
  //     res=>this.pedidoService.getAll().subscribe(
  //       response=>this.pedido=response
  //     )
  //   );
  // }
  update(h:number):void{
    this.pedidos= new Pedido(this.pedidos.order_id, this.pedidos.user_id, h, this.pedidos.cantidad, this.pedidos.product_id);
   
    this.pedidoService.update(this.pedidos).subscribe(
      e=>{ 
        this.router.navigate(['/pedidos-admin'])
        console.log(this.pedidos);
      }
      
    )
 
  }
  delete(pedido:Pedido):void{
    console.log("Delete");
    this.pedidoService.delete(pedido.order_id).subscribe(
      res=> this.pedidoService.getAll().subscribe(
        response=> this.pedido=response
      )
    );
  
  }

  // create(pedido: Pedido){
  //   console.log("Create");
  //   this.pedidoService.create(pedido).subscribe(
  //     res=>this.pedidoService.getAll().subscribe(
  //       response=>this.pedido=response
  //     )
  //   );

  // }




}
