import {Injectable} from '@angular/core';
import {Error, Login, Organizacion} from "../model/producto";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    users: Organizacion[];

    constructor() {
        this.users = [{
            id: 1,
            nombre: 'ferreteria mas',
            nit: '76764409',
            telefono: 420876788,
            celular: 3016835465,
            usuario: 'ferreteriamas',
            contrasena: '1234',
            correo: '',
            direccion: 'cra 121 # 22 c3'

        }]
    }

    login(data: Login): Organizacion | undefined {

        let empresa;

        this.users.forEach(emp => {
            if (emp.usuario === data.user && emp.contrasena === data.password) {
                empresa = emp;
            }
        });
        //  console.log(empresa)
        return empresa;
    }

    registro(empresa: Organizacion) {
        const size = this.users.length;
        if (size < this.users.push(empresa)) {
            return 200;
        }
        return undefined;

    }

    findById(id: number): Organizacion | undefined {
        let user;
        this.users.forEach(org => {
            if (org.id === id) {
                user = org;
            }
        });
        return user;
    }
}
