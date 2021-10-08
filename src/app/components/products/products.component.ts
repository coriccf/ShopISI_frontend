import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { CategoriaService } from '../categorias/categoria.service';
import { Categoria } from '../categorias/categoria';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  [x: string]: any;
  filterPost='';

  products!: Product[];
  categoria: Array<Categoria>=[];


  constructor(private productService:ProductService, private categoriaService:CategoriaService) { }
  ngOnInit(): void {
    this.productService.getAll().subscribe(
      p => this.products=p
    );
    this.categoriaService.getAll().subscribe(
      c => this.categorias=c
    );
  }

  delete(product:Product):void{
    console.log("Delege");
    this.productService.delete(product.product_id).subscribe(
      res=> this.productService.getAll().subscribe(
        response=> this.products=response
      )
    );
  
  }

}
