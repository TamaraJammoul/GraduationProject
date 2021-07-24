import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Signup } from '../models/signup.model';

@Injectable({
    providedIn: 'root',
})

export class SignUpFormGroup {
    constructor(private fb: FormBuilder) { }

    getFormGroup(user?: Signup): FormGroup {
        return this.fb.group({
            name: [user?.name, [Validators.required, Validators.maxLength(100), Validators.minLength(1)]],
            password: [user?.password, [Validators.maxLength(50), Validators.minLength(6)]],
            phone: [user?.phone, [Validators.maxLength(50), Validators.minLength(6)]],
            email: [user?.email, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
            projectName: [user?.projectName, [Validators.maxLength(50), Validators.minLength(6)]],
            teamName: [user?.teamName, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
        }
        );
    }

    getValueFromFormGroup(fg: FormGroup): Signup {
        return {
            name: fg.controls.name.value,
            password: fg.controls.password.value,
            email: fg.controls.email.value,
            phone: fg.controls.phone.value,
            projectName: fg.controls.projectName.value,
            teamName: fg.controls.teamName.value
        };
    }
}
