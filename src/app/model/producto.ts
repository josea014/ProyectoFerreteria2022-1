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
export interface login{
    user: string,
    password: string
}