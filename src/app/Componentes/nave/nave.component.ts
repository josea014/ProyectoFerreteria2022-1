import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  abrirPerfil() {

    this.router.navigate(["perfil"]);
  }

  abrirConsulta(){
    this.router.navigate(['consulta']);
  }
  abrirVentas(){
    this.router.navigate(['ventas']);
  }
  abrirInicio(){
    this.router.navigate(['inicio']);
  }
  abrirAgregarCliente(){
    this.router.navigate(['agregar-cliente']);
  }
  abrirProducto(){
    this.router.navigate(['producto']);
  }
 abrirLogin(){
   this.router.navigate(['login']);
 }

}


