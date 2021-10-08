import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  
  product!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      p => this.product=p
    );
  }
  update(product:Product){
    console.log("Update");
    this.productService.update(product).subscribe(
      res=>this.productService.getAll().subscribe(
        response=>this.product=response
      )
    );
  }

  create(product: Product){
    console.log("Create");
    this.productService.create(product).subscribe(
      res=>this.productService.getAll().subscribe(
        response=>this.product=response
      )
    );

  }

}