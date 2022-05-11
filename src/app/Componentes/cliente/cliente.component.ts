import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {


  formFields;
  constructor(private formBuilder: FormBuilder) {
    this.formFields = this.formBuilder.group({
      numeroDocumento: '',
      nombre: '',
      telefono: '',
      celular: '',
      municipio: '',
      departamento: '',
      direccion: ''

    });
  }

  ngOnInit(): void {
  }

  onSubmit(data:object): void {
    console.log(data);
    this.formFields.reset();
  }
}
