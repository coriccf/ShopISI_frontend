import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url:string="http://localhost:8081/categoria";


  constructor(private http:HttpClient) { }

  // OBTENER TODAS LAS CATEGORIAS
  getAll():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url);
  }

  // CREAR UNA NUEVA CATEGORIA
  create(categoria:Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(this.url, categoria);
  }

  // OBTENER UNA CATEGORIA POR ID
  get(id:number):Observable<Categoria>{
    return this.http.get<Categoria>(this.url+'/'+id);
  }

  // ACTUALIZAR UNA CATEGORIA 
  update(categoria:Categoria):Observable<Categoria>{
    return this.http.put<Categoria>(this.url, categoria);
  }

  // ELIMINAR CATEGORIA
  delete(id:number):Observable<Categoria>{
    return this.http.delete<Categoria>(this.url+'/'+id);
  }

  upload(file:File):Observable<any>{
    const formData=new FormData();
    formData.append('files',file);
    return  this.http.post<any>(this.url+`/upload`,formData);
  }
}
