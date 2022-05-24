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
    this.headerTabla = ['nombre', 'cedula', 'celular', 'direccion'];
  this.dataSource = [
    {  nombre: 'Jose', cedula: 3876546, celular: 3009878987, direccion: 'calle 34 #45-6'},
    {  nombre: 'Juan', cedula: 4567890, celular: 3006543210,direccion: 'calle 36 #45-9'},
    {  nombre: 'Lucas', cedula: 12345634, celular: 30123456789,direccion: 'calle 31 #11-6'},
    {  nombre: 'Simon', cedula: 3567090, celular: 3028908877,direccion: 'calle 35 manzana #5-1'}

  ]}
  

  ngOnInit(): void {
  }

}
