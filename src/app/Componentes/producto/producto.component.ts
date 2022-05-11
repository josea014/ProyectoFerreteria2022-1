import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {



  formFields: any;
  constructor(private formBuilder: FormBuilder) {
    this.formFields = this.formBuilder.group({
      nombreProducto: '',
      nombreUnidad: '',
      descripcion: '',
      nombreInternacional: '',
      cantidad: '',
      tipoInventario: '',
      direccion: '', fechaIngreso: '', precio: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data: object): void {

    console.log(data);
    this.formFields.reset();
  }
}
