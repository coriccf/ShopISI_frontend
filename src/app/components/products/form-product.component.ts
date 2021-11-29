import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';
import { CategoriaService } from '../categorias/categoria.service';
import { Categoria } from '../categorias/categoria';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  categoria: Categoria | undefined;
      product_id: number=0;
      product_name: string= "";
      details: string="";
      size: string="";
      color: string="";
      costProduct:number=0;
      stock: number=0;
      filename = '';
    imagenMin: File[]=[];
    fileInfo = '';
    selectedFiles?: FileList;
    progressInfo=[];
    message:string[] = [];
    imagen_id:number[]=[];
    cont:number=0;
    categoria_categoria_id: number=0;
    image: any="";

    fileData: File | undefined ;
    imageBase64:any="";

      product:Product= new Product(this.product_id,this.product_name, this.details, this.size, this.color, this.costProduct, this.stock, this.categoria_categoria_id, this.image);
      // , this.imagen_id
      titulo:string="Registro de nuevo producto";

      constructor(private productService:ProductService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }
      cargar():void{
        this.activatedRoute.params.subscribe(
          e=>{
            let id=e['id'];
            if(id){
              this.productService.get(id).subscribe(
                es=> this.product=es
              );
            }
          }
        )
      }

  //     create():void{

  //     this.uploadFiles();
  // }

  update():void{
    this.product.image=(this.imageBase64!='')?this.imageBase64:this.product.image;
    this.productService.update(this.product).subscribe(
      e=> this.router.navigate(['/products'])
    );
  }



  create():void{
    console.log(this.product);
    this.product.image=this.imageBase64;
    this.productService.create(this.product).subscribe(
      res=> this.router.navigate(['/products'])
    );
}

postMethod(event:any){
  this.fileData =<File> event.target.files[0];
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();
  reader.readAsDataURL(this.fileData);
  reader.onload = (_event) => {
    this.imageBase64 = reader.result;



  };



}



  selectFiles(event:any):void{
    this.progressInfo=[];
   this.filename=event.target.files.length + " archivos";
    this.selectedFiles =event.target.files;
    if(this.selectedFiles){
      for(let i=0;i<this.selectedFiles.length;i++){
        this.vista(i,this.selectedFiles[i]);
      }
    }
    //this.uploadFiles();
  }

  vista(index:number,file:File){
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin[index] = evento.target.result;
    };
    fr.readAsDataURL(file);
  }


  // uploadFiles(){
  //   this.message=[];
  //   this.cont=0;
  //   if(this.selectedFiles){
  //     for(let i=0;i<this.selectedFiles.length;i++){
  //       this.upload(i,this.selectedFiles[i]);
  //     }
  //   }
  // }

//   upload(index:number,file:File): void{

//     this.productService.upload(file).subscribe(
//       data=> {

//        if (data != 0){
//          this.imagen_id[index]=data;
//         console.log(this.product);
//         this.productService.create(this.product).subscribe(
//           res=> this.router.navigate(['/products'])
//         );

//        }
//         console.log(data);


//         console.log("IMAGEN DATA : ",data);
//     },
//     err=>{

//       this.message[index]="No se puede subir el archivo "+file.name;
//     });
// }

}
