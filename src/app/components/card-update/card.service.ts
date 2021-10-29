import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private url:string="http://localhost:8081/card";

  constructor(private http:HttpClient) { }

  // OBTENER TODAS LAS TARJETAS
  getAll():Observable<Card[]>{
    return this.http.get<Card[]>(this.url);
  }

  // OBTENER UNA TARJETA POR ID
  get(id:number):Observable<Card>{
    return this.http.get<Card>(this.url+'/'+id);
  }

  // ACTUALIZAR TARJETA
  update(card: Card):Observable<Card>{
    return this.http.put<Card>(this.url, card);
  }

  // ELIMINAR TARJETA
  delete(id:number):Observable<Card>{
    return this.http.delete<Card>(this.url+'/'+id);
  }

  // CREAR TARJETA
  create(card:Card):Observable<Card>{
    return this.http.post<Card>(this.url, card);
  }


}
