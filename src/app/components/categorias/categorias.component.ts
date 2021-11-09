import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

 
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  buttonDisabled: boolean = false;
  public popoverTitle:string = 'Mensaje de confirmacion';
  public popoverMessage: string= 'Esta seguro que desea eliminar el producto?';

  filterPost='';
  categoria_id: number=5;
      nombre: string= "";
      status: boolean=true;
      categoria:Categoria= new Categoria(this.categoria_id,this.nombre, this.status); 
  
  categorias!: Categoria[];


  constructor(private categoriaService:CategoriaService, private activatedRoute:ActivatedRoute, private router:Router) {  }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe(
      c => this.categorias=c
    );
  }
  delete(categoria:Categoria):void{
 
    this.categoriaService.delete(categoria.categoria_id).subscribe(
     
      res=>{
         this.categoriaService.getAll().subscribe(
    
          response=> {
          this.categorias=response}, 
          
          
      )}, err=> window.alert("No se puede elminar por que la categoria esta siendo usada")
    );
  }

  cargar(id:number):void{ 
          this.categoriaService.get(id).subscribe(
            

            es=> {this.categoria=es;
          console.log(es);
              this.update();}
          
            );
        }

    

  update():void{
    this.categoria= new Categoria(this.categoria.categoria_id, this.categoria.nombre, !this.categoria.status);
    this.categoriaService.update(this.categoria).subscribe(
      e=>{ console.log(e);
        this.router.navigate(['/categorias'])
      }
    )
 
  }

}
