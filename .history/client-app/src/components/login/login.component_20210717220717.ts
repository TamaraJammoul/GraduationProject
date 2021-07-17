import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup } from '@angular/forms';
import { LoginFormGroup } from '../../form-groups/login.service';
import { AppActions } from '../../store/app.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg: FormGroup;
  constructor(private loginFormGroup: LoginFormGroup,
    private store$: Store) { }

  ngOnInit(): void {
    this.fg = this.loginFormGroup.getFormGroup();
  }

  onSubmit() {
    this.store$.dispatch(AppActions.login(this.loginFormGroup.getValueFromFormGroup(this.fg)));
  }

}
