import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  disabled: boolean;
  cantidades: number[];
  constructor() {
    this.disabled = true;
    this.cantidades = [1,2,3,4,5,8,4,6,6,9,10,12]
  }
  ngOnInit(): void {
  }

}
