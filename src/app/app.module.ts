import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';


import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaveComponent } from './Componentes/nave/nave.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ContenidoComponent } from './Componentes/contenido/contenido.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';
import { ProductoComponent } from './Componentes/producto/producto.component';
import { VentasComponent } from './Componentes/ventas/ventas.component';
import { ClienteComponent } from './Componentes/cliente/cliente.component';
import { ConsultaComponent } from './Componentes/consulta/consulta.component';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './Componentes/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NaveComponent,
    InicioComponent,
    ContenidoComponent,
    PerfilComponent,
    ProductoComponent,
    VentasComponent,
    ClienteComponent,
    ConsultaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    MatSidenavModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
