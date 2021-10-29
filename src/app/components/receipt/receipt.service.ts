import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Receipt } from './receipt';


@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  private url:string="http://localhost:8081/receipt";


  constructor(private http:HttpClient) { }


  getAll():Observable<Receipt[]>{
    return this.http.get<Receipt[]>(this.url);
  }

 
  create(receipt:Receipt):Observable<Receipt>{
    return this.http.post<Receipt>(this.url, receipt);
  }

 
  get(id:number):Observable<Receipt>{
    return this.http.get<Receipt>(this.url+'/'+id);
  }

  

  upload(file:File):Observable<any>{
    const formData=new FormData();
    formData.append('files',file);
    return  this.http.post<any>(this.url+`/upload`,formData);
  }
}
