import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

    product:Product= new Product();
    titulo:string="Registro de nuevo producto";

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  create():void{
    console.log(this.product);
  }

}
