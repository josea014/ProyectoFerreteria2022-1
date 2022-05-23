import { Component, OnInit } from '@angular/core';
import { Cliente } from './../../model/producto';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  tablaHidden: boolean = true;
  headerTabla: String[];
  dataSource: Cliente[] | null= null;

  constructor() { 
    this.headerTabla = ['codigo','nombre', 'cedula', 'celular', 'direccion'];
  this.dataSource = [
    { codigo: 454, nombre: 'jose', cedula: 13000, celular: 4000, direccion: '20cm'}

  ]}
  

  ngOnInit(): void {
  }

}
