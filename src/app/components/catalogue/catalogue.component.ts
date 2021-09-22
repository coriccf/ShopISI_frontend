import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import { Product } from './product';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})


 export class CatalogueComponent implements OnInit{

  product: any[] = [];

  constructor (private http: HttpClient){
    this.http.get('http://localhost:8081/producto')
    .subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
      }
    )
  }
  ngOnInit(): void {
  }

 }




