import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsultaComponent} from './Componentes/consulta/consulta.component';
import {PerfilComponent  } from "./Componentes/perfil/perfil.component";
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ProductoComponent } from './Componentes/producto/producto.component';
import { VentasComponent } from './Componentes/ventas/ventas.component';
import { ClienteComponent } from './Componentes/cliente/cliente.component';
const ROUTES: Routes = [
  {path: 'inicio', component: InicioComponent},
 {path: 'consulta', component:ConsultaComponent},
 {path: 'producto',component:ProductoComponent},
 {path:'perfil', component:PerfilComponent},
 {path:'ventas', component:VentasComponent},
 {path:'agregar-cliente', component:ClienteComponent},

{path: '**', pathMatch:'full', redirectTo: 'inicio'}

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
