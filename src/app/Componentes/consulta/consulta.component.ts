import { Producto } from './../../model/producto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  tablaHidden: boolean = true;
  formFields: any;

  headerTabla: String[];
  dataSource: Producto[] | null = null;
  constructor(private formBuilder: FormBuilder) {
    this.formFields = this.formBuilder.group({
      nombre: '',
      precio: '',
      material: '', dimensiones: '',
      cantidad: '',
    })
    this.headerTabla = ["nombre", 'precio', 'material', 'dimensiones', 'stock'];
    this.dataSource = [

      { nombre: "martillo", precio: 1300, material: "Hierro y madera", dimensiones: '20cm', stock: 100 }

    ];
  }

  ngOnInit(): void {
  }
    
  onSubmit(data:object):void {
    console.log(data);
    this.formFields.reset();
  }
}
