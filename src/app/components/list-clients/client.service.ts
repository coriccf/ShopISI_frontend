import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Client} from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService{
  private url:string="http://localhost:8081/client";

  constructor(private http:HttpClient){}

  //obteneer todos los usuarios
  getAll():Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  }

  //crear un usuario
  create(client:Client):Observable<Client>{
    return this.http.post<Client>(this.url,client);
  }

  //obtener un usuario por id
  get(id:number):Observable<Client>{
    return this.http.get<Client>(this.url+'/'+id);
  }

  //actualizar un usuario
  update(client:Client):Observable<Client>{
    return this.http.put<Client>(this.url,client);
  }

  //eliminar un usuario
  delete(id:number):Observable<Client>{
    return this.http.delete<Client>(this.url+'/'+id);
  }


}

