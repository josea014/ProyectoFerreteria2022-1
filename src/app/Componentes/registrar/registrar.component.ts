import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  checkoutForm;
  hide: boolean = true;
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      nit: '',
      usuario: '',
      contrasena: '',
      telefono: '',
      celular: '',
     
      direccion: '',
      correo: ''

    })
   }

  ngOnInit(): void {
  }
  onSubmit(data: any): void{
    console.log(data);
    this.checkoutForm.reset();
  }
}
