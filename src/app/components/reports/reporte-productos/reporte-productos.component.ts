import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-reporte-productos',
  templateUrl: './reporte-productos.component.html',
  styleUrls: ['./reporte-productos.component.css']
})
export class ReporteProductosComponent implements OnInit {
    filterPost='';

    product: Array<Product> = [];


    constructor(private productService: ProductService) { }

    ngOnInit(): void {
      this.productService.getAll().subscribe(
        p => this.product=p
      );
    }

    get(product: Product):void{
      console.log("get");
      console.log(this.product);
    }

    delete(product: Product):void{
      console.log("Delete");
      this.productService.delete(product.product_id).subscribe(
        res=>this.productService.getAll().subscribe(
          response=> this.product=response
        )
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

