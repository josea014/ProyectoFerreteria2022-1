import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  disabled: boolean;
  cantidades: number[];
  form;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      empresa:'',
      nombreProducto:'',
      factura:'',
      datoCliente: '',
      descripcion: '',
      cantidad: '',
      codigoBarra: '',
      fecha:'',
      descuento: '',
      precio: '',
      total: '',
    })
    this.disabled = true;
    this.cantidades = [1, 2, 3, 4, 5, 8, 4, 6, 6, 9, 10, 12]
  }
  ngOnInit(): void {
  }
  onSubmit(data:object):void {
    console.log(data);
    this.form.reset();
  }

}
