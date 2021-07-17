import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Signup } from '../models/signup.model';

@Injectable({
    providedIn: 'root',
})

export class SignUpFormGroup {
    constructor(private fb: FormBuilder) { }

    getFormGroup(user: Signup): FormGroup {
        return this.fb.group({
            firstName: [user?.firstName, [Validators.required, Validators.maxLength(100), Validators.minLength(1)]],
            lastName: [user?.lastName, [Validators.maxLength(50), Validators.minLength(6)]],
            email: [user?.email, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
        }
        );
    }

    getValueFromFormGroup(fg: FormGroup) {
        return {
            firstName: fg.controls.firstName.value,
            lastName: fg.controls.lastName.value,
            email: fg.controls.email.value,
        };
    }
}
