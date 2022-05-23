import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Producto} from "../model/producto";

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    data: Producto[];

    constructor() {
        this.data = [
            {
                codigo: 454,
                nombre: 'martillo',
                precio: 13000,
                material: 'Hierro y madera',
                dimensiones: '20cm',
                stock: 100
            },
            {codigo: 444, nombre: 'cinta', precio: 1500, material: 'goma', dimensiones: '15 m', stock: 100},
            {codigo: 654, nombre: 'clavo', precio: 100, material: 'acero', dimensiones: '20cm', stock: 100},
            {codigo: 571, nombre: 'cinta', precio: 1300, material: 'goma', dimensiones: '20cm', stock: 100},
            {codigo: 98, nombre: 'pinzas', precio: 14000, material: 'Hierro y madera', dimensiones: '20cm', stock: 100},
            {codigo: 985, nombre: 'disco R', precio: 23500, material: 'Hierro', dimensiones: '20cm', stock: 100},
            {codigo: 111, nombre: 'puntura pintuco', precio: 1300, material: 'liquido', dimensiones: '20cm', stock: 100}

        ]
    }

    findProducto(nombre: string, codigo: number):any {
        return  this.data.find(producto => {
        producto.nombre === nombre && producto.codigo == codigo
    }

)

}

}
