import { Producto } from './../../model/producto';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  tablaHidden: boolean = true;
  headerTabla: String[];
  dataSource: Producto[] | null= null;
  constructor() {
    this.headerTabla = ['codigo','nombre', 'precio', 'material', 'dimensiones', 'stock'];
    this.dataSource = [
      { codigo: 454, nombre: 'martillo', precio: 13000, material: 'Hierro y madera', dimensiones: '20cm', stock: 100 },
      {codigo:444,nombre:'cinta',precio:1500, material: 'goma',dimensiones:'15 m', stock:100},
      { codigo: 654, nombre: 'clavo', precio: 100, material: 'acero', dimensiones: '20cm', stock: 100 },
      { codigo: 571, nombre: 'cinta', precio: 1300, material: 'goma', dimensiones: '20cm', stock: 100 },
      { codigo: 98, nombre: 'pinzas', precio: 14000, material: 'Hierro y madera', dimensiones: '20cm', stock: 100 },
      { codigo: 985, nombre: 'disco R', precio: 23500, material: 'Hierro', dimensiones: '20cm', stock: 100 },
      { codigo: 111, nombre: 'puntura pintuco', precio: 1300, material: 'liquido', dimensiones: '20cm', stock: 100 }
  
   
  ];
  }

  ngOnInit(): void {
  }

}
