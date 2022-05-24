import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formFields: any;
    anio: number;

    constructor(private router: Router) {
        this.formFields = new FormGroup({
            user: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
        this.anio = new Date().getFullYear();
    }

    ngOnInit(): void {
    }

    onSubmit(data: FormGroup) {
        console.log("data ", data);
        if (!data.valid) {
            return
        }
        console.log(data.get('user')?.value);
        this.router.navigate(['start']);
    }

    get user() {
        return this.formFields.get('user')?.value;
    }

    get password() {
        return this.formFields.get('password')?.value;
    }

    
}
