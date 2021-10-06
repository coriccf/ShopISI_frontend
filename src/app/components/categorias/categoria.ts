export class Categoria {

    categoria_id: number=0;
    nombre: string= "";
    status: boolean = true;
    constructor(categoria_id:number,nombre:string,status:boolean){
        this.categoria_id=categoria_id;
        this.nombre=nombre;
        this.status=status;
    }
}

