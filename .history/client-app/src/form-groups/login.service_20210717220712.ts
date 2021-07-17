import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';

@Injectable({
    providedIn: 'root',
})

export class LoginFormGroup {
    constructor(private fb: FormBuilder) { }

    getFormGroup(user?: Login): FormGroup {
        return this.fb.group({
            password: [user?.password, [Validators.maxLength(50), Validators.minLength(6)]],
            email: [user?.email, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
        }
        );
    }

    getValueFromFormGroup(fg: FormGroup): Login {
        return {
            password: fg.controls.password.value,
            email: fg.controls.email.value,
        };
    }
}
