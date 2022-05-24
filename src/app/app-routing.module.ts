import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsultaComponent} from './Componentes/consulta/consulta.component';
import {PerfilComponent} from "./Componentes/perfil/perfil.component";
import {InicioComponent} from './Componentes/inicio/inicio.component';
import {ProductoComponent} from './Componentes/producto/producto.component';
import {VentasComponent} from './Componentes/ventas/ventas.component';
import {ClienteComponent} from './Componentes/cliente/cliente.component';
import {LoginComponent} from "./Componentes/login/login.component";
import {NaveComponent} from "./Componentes/nave/nave.component";
import {NavbarComponent} from "./Componentes/navbar/navbar.component";
import {RegistrarComponent} from "./Componentes/registrar/registrar.component";
import {AuthGuard} from "./guard/auth.guard";

const ROUTES: Routes = [
    {
        path: 'start', component: NaveComponent, canActivate:[AuthGuard], children:
            [
                {path: 'consulta', component: ConsultaComponent},
                {path: 'inicio', component: InicioComponent},
                {path: 'producto', component: ProductoComponent},
                {path: 'perfil', component: PerfilComponent},
                {path: 'ventas', component: VentasComponent},
                {path: 'agregar-cliente', component: ClienteComponent},
                {path: '**', pathMatch: 'full', redirectTo: 'inicio'}

            ]
    },

    {path: 'login', component: LoginComponent},

    {path: 'registrar', component: RegistrarComponent},

    {path: '**', pathMatch: 'full', redirectTo: '/login'},



];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
