import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any[] = [];
  product_id: any[] = [];


  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params =>{
      this.product_id = [parseInt(params['product_id'])]
      console.log(params['product_id']);
      console.log(this.product_id)
    })

    this.http.get('http://localhost:8081/producto/details/' + this.product_id)
    .subscribe((data: any) => {
      this.product = data;
      console.log(this.product[0]);
    })

   }

  ngOnInit(): void {

  }

}
