import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup } from '@angular/forms';
import { SignUpFormGroup } from '../../form-groups/signup.service';
import { AppActions } from '../../store/app.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  fg: FormGroup;
  constructor(private signUpFormGroup: SignUpFormGroup,
    private store$: Store) { }

  ngOnInit(): void {
    this.fg = this.signUpFormGroup.getFormGroup();
  }

  onSubmit() {
    this.store$.dispatch(AppActions.login(this.signUpFormGroup.getValueFromFormGroup(this.fg)));
  }
}
