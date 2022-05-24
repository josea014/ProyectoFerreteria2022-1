export interface Producto {
    codigo: number,
    nombre: string,
    precio: number,
    material: string,
    dimensiones: string,
    stock: number


}
export interface Cliente {
    codigo: number,
    nombre: string,
    cedula: number,
    celular: number,
    direccion: string

}
export interface Login{
    user: string,
    password: string
}

export interface Organizacion{
    id: number,
    nombre: string,
    nit: string,
    telefono:number,
    celular: number,
    usuario:string,
    contrasena:string
    correo?: string
    direccion:string
}

export  interface  Error{
    tipo:string,
    descripcion: string
}
