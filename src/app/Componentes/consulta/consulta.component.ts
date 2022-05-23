import {Producto} from './../../model/producto';
import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-consulta',
    templateUrl: './consulta.component.html',
    styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
    tablaHidden: boolean = true;
    headerTabla: String[];
    dataSource: Producto[] | null = null;

    constructor() {
        this.headerTabla = ['codigo', 'nombre', 'precio', 'material', 'dimensiones', 'stock'];
        this.dataSource = [


        ];
    }

    buscar(data: any) {
        console.log(data);
    }

    ngOnInit(): void {
    }

}
