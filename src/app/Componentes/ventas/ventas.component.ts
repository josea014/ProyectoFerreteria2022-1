import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-ventas',
    templateUrl: './ventas.component.html',
    styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

    disabled: boolean;
    cantidades: number[];
    dataSource: any;
    headerTabla: string[];
    form;

    constructor() {
        this.headerTabla = ['factura', 'nombre', 'cantidad', 'precio', 'descuento', 'total'];
        this.dataSource = [{
            factura: 45,
            nombre: 'Tornillos',
            cantidad: 12,
            precio: 500,
            descuento: '0',
            total: 500 * 12

        },
        {factura: 45,
            nombre: 'Lampara',
            cantidad: 6,
            precio: 8300,
            descuento: '0',
            total: 8300* 6
            
        }

        ];
        this.form = new FormGroup({
            empresa: new FormControl(''),
            nombreProducto: new FormControl(''),
            factura: new FormControl(''),
            datoCliente: new FormControl(''),
            descripcion: new FormControl(''),
            cantidad: new FormControl(''),
            codigoBarra: new FormControl(''),
            fecha: new FormControl(''),
            descuento: new FormControl(''),
            precio: new FormControl(''),
            total: new FormControl(''),
        })
        this.disabled = true;
        this.cantidades = [1, 2, 3, 4, 5, 8, 4, 6, 6, 9, 10, 12]
    }

    ngOnInit(): void {
    }

    onSubmit(data: FormGroup): void {
        console.log(data);

    }

}
