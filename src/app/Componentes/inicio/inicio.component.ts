import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  titulo:string;
  imagen:string ="";
  descripcion:string ;

  constructor() {

    this.imagen = "../../../assets/img/logo-ferre.png";
    this.titulo="FERRETERIA MAS";
    this.descripcion= ""
   
   }


  ngOnInit(): void {
  }

}
