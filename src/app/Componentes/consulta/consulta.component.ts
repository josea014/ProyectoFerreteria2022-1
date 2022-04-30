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
    this.headerTabla = ["nombre", 'precio', 'material', 'dimensiones', 'stock'];
    this.dataSource = [
     
      { nombre: "martillo", precio: 1300, material: "Hierro y madera", dimensiones: '20cm', stock: 100 }
  
  ];
  }

  ngOnInit(): void {
  }

}
