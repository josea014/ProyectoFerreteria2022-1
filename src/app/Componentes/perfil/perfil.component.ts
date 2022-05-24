import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Organizacion} from "../../model/producto";

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
    checkoutForm;
    hide: boolean = true;
    user!: Organizacion;

    constructor(private auth: AuthService) {
        let id = localStorage.getItem('idUser');
        if (id) {
            let data = this.auth.findById(+id);

            if (data)
                this.user = data;
        }
        this.checkoutForm = new FormGroup({
            nombre: new FormControl(this.user?.nombre),
            numeroIdentificacion: new FormControl(this.user.nit),
            usuario: new FormControl(this.user.usuario),
            contrasena: new FormControl(this.user.contrasena),
            telefono: new FormControl(this.user.telefono),
            celular: new FormControl(this.user.celular),
            // municipio: new FormControl(this.user.),
            // departamento: new FormControl(''),
            direccion: new FormControl(this.user.direccion),
            // fechaNacimiento: new FormControl(''),
            correo: new FormControl(this.user.correo)

        })


    }

    ngOnInit(): void {
    }

    onSubmit(data: any): void {
        console.log(data);
        this.checkoutForm.reset();
    }
}
