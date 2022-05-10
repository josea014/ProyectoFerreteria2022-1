import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  checkoutForm;
  hide: boolean = true;
  constructor(private formBuilder: FormBuilder) {

    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      numeroIdentificacion: '',
      usuario: '',
      contrasena: '',
      telefono: '',
      celular: '',
      municipio: '',
      departamento: '',
      direccion: '',
      fechaNacimiento: ''

    })
  }

  ngOnInit(): void {
  }

  onSubmit(data: any): void{
    console.log(data);
    this.checkoutForm.reset();
  }
}
