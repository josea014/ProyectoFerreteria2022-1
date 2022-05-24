import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Organizacion} from "../../model/producto";

@Component({
    selector: 'app-registrar',
    templateUrl: './registrar.component.html',
    styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
    checkoutForm: FormGroup;
    hide: boolean = true;
    formData!: Organizacion;

    constructor(private auth: AuthService) {
        this.checkoutForm = new FormGroup({
            nombre: new FormControl('', [Validators.required]),
            nit: new FormControl('', [Validators.required]),
            usuario: new FormControl('', [Validators.required]),
            contrasena: new FormControl('', [Validators.required]),
            telefono: new FormControl('', [Validators.required]),
            celular: new FormControl('', [Validators.required]),
            direccion: new FormControl('', [Validators.required]),
            correo: new FormControl('', [Validators.required])

        })
    }

    ngOnInit(): void {
    }

    onSubmit(data: FormGroup): void {
        if (data.invalid) {
            return
        }

        this.formData = {
            id:new Date().getTime(),
            usuario: data.get('usuario')?.value,
            nombre: data.get('nombre')?.value,
            nit: data.get('nit')?.value,
            contrasena: data.get('contrasena')?.value,
            telefono: data.get('telefono')?.value,
            celular: data.get('celular')?.value,
            direccion: data.get('direccion')?.value,
            correo: data.get('correo')?.value
        }
        console.log(data,new Date().getTime());
        // this.checkoutForm.reset();
        const result = this.auth.registro(this.formData);
    }

    volver() {
        history.back();
    }
}
