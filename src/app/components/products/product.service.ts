import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url:string="http://localhost:8081/producto";


  constructor(private http:HttpClient) { }

  // OBTENER TODOS LOS PRODUCTOS
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  // CREAR UN PRODUCTO
  create(product:Product):Observable<Product>{
    return this.http.post<Product>(this.url, product);
  }

  // OBTENER UN PRODUCTO POR ID
  get(id:number):Observable<Product>{
    return this.http.get<Product>(this.url+'/'+id);
  }

  // ACTUALIZAR UN PRODUCTO
  update(product:Product):Observable<Product>{
    return this.http.put<Product>(this.url, product);
  }

  // ELIMINAR UN PRODUCTO
  delete(id:number):Observable<Product>{
    window.alert("No se puede elminar por que la categoria esta siendo usada");
    return this.http.delete<Product>(this.url+'/'+id);
    
  }

  upload(file:File):Observable<any>{
    const formData=new FormData();
    formData.append('files',file);
    return  this.http.post<any>(this.url+`/upload`,formData);
  }
}
