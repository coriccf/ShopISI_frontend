import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from './cart';
@Injectable({
    providedIn: 'root'
})
export class CartService{
    private url: string="http://localhost:8081/cart/Admincart";
    

    
  constructor(private http:HttpClient) { }

  // OBTENER TODAS LAS CATEGORIAS
  getAll():Observable<Cart[]>{
    return this.http.get<Cart[]>(this.url);
  }

  // CREAR UNA NUEVA CATEGORIA
  create(cart:Cart):Observable<Cart>{
    return this.http.post<Cart>(this.url, cart);
  }

  // OBTENER UNA CATEGORIA POR ID
  get(id:number):Observable<Cart>{
    return this.http.get<Cart>(this.url+'/'+id);
  }

  // ACTUALIZAR UNA CATEGORIA 
  update(cart:Cart):Observable<Cart>{
    console.log(cart);
    return this.http.put<Cart>(this.url, cart);
  }

  // ELIMINAR CATEGORIA
  delete(id:number):Observable<Cart>{
    return this.http.delete<Cart>(this.url+'/'+id);
  }
}