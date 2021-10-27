import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol} from './rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private url:string="http://localhost:8081/rol";


  constructor(private http:HttpClient) { }

  
  getAll():Observable<Rol[]>{
    return this.http.get<Rol[]>(this.url);
  }


  get(id:number):Observable<Rol>{
    return this.http.get<Rol>(this.url+'/'+id);
  }

  

  upload(file:File):Observable<any>{
    const formData=new FormData();
    formData.append('files',file);
    return  this.http.post<any>(this.url+`/upload`,formData);
  }
}
