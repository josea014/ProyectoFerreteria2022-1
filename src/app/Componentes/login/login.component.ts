import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Error} from "../../model/producto";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formFields: any;
    anio: number;
    error!: Error;

    constructor(private router: Router, private auth: AuthService) {
        this.formFields = new FormGroup({
            user: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
        this.anio = new Date().getFullYear();
    }

    ngOnInit(): void {
    }

    onSubmit(data: FormGroup) {

        if (!data.valid) {
            return
        }
        const usuario = {
            user: data.get('user')?.value,
            password: data.get('password')?.value,

        }

        const respuesta = this.auth.login(usuario);

        if (respuesta) {
            localStorage.setItem('idUser', respuesta.id + "");
            this.router.navigate(['start']);
        }
        this.error = {
            tipo: "ERROR",
            descripcion: "USUARIO O CONTRASEÑA INCORRECTOS"
        }

    }

    get user() {
        return this.formFields.get('user')?.value;
    }

    get password() {
        return this.formFields.get('password')?.value;
    }
}
