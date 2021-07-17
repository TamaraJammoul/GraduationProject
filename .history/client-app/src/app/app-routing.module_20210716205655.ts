import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { reducers } from '../store/app.reducer';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { STATE } from '../store/app.state';
import { AppEffects } from '../store/app.effect';
import { MaterialModule } from '../libs/material.module';
import { AddMemberDialogComponent } from '../components/add-member-dialog/add-member-dialog.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    StoreModule.forFeature(STATE, reducers),
    EffectsModule.forFeature([AppEffects]),
  ],
  exports: [RouterModule],
  providers: [AddMemberDialogComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent
  ],
  entryComponents: []
})
export class AppRoutingModule { }
