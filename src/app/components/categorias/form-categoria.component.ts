import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent implements OnInit {
      categoria_id: number=0;
      nombre: string= "";
      status: boolean=true;
      
      categoria:Categoria= new Categoria(this.categoria_id,this.nombre, this.status); 
      titulo:string="Registro de nueva categoria";

      constructor(private categoriaService:CategoriaService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }
      cargar():void{
        this.activatedRoute.params.subscribe(
          e=>{
            let id=e['id'];
            if(id){
              this.categoriaService.get(id).subscribe(
                es=> this.categoria=es
              );
            }
          }
        )
      }

  //     create():void{
    
  //     this.uploadFiles();
  // }

  update():void{
    this.categoriaService.update(this.categoria).subscribe(
      e=> this.router.navigate(['/categorias'])
    );
  }
  updateStatus():void{
    this.categoriaService.update(this.categoria).subscribe(
      e=> this.router.navigate(['/categorias'])
    );
  }
  create():void{
    console.log(this.categoria);
    this.categoriaService.create(this.categoria).subscribe(
      res=> this.router.navigate(['/categorias'])
    );
}

  

}
