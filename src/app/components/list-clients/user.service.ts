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



}

