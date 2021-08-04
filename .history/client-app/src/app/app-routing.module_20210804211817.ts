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
import { AddMemberDialogComponent } from '../components/team-member-dialog/add-member-dialog.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home-page/home-page.component';
import { NodejsComponent } from '../components/nodejs/nodejs.component';
import { AuthGuard } from '../services/authGuard.service';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'documentation',
    children: [
      {
        path: 'node.js',
        component: NodejsComponent,
      },
      {
        path: 'android',
        component: NodejsComponent,
      },
    ]
  }
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
