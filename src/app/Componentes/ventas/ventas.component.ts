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
            nombre: 'first',
            cantidad: 11,
            precio: 18200,
            descuento: '5',
            total: 18200 * 11

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
