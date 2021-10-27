export class Rol{

    rol_id: number=0;
    nombre: string= "";
    status: number=0;
    constructor(rol_id:number,nombre:string,status:number){
        this.rol_id=rol_id;
        this.nombre=nombre;
        this.status=status;
    }
}

