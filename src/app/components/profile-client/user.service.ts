import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private url:string="http://localhost:8081/user";

  constructor(private http:HttpClient){}

  //obteneer todos los usuarios
  getAll():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  //crear un usuario
  create(user:User):Observable<User>{
    return this.http.post<User>(this.url,user);
  }

  //obtener un usuario por id
  get(id:number):Observable<User>{
    return this.http.get<User>(this.url+'/'+id);
  }

  //actualizar un usuario
  update(user:User):Observable<User>{
    return this.http.put<User>(this.url,user);
  }

  //eliminar un usuario
  delete(id:number):Observable<User>{
    return this.http.delete<User>(this.url+'/'+id);
  }


}

