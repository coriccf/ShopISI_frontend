import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pedido } from './pedidos';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private url:string="http://localhost:8081/orderList";

  constructor(private http:HttpClient) { }

  // OBTENER TODOS LOS PEDIDOS
  getAll():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.url);
  }


}
