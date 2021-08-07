import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddMemberDialogComponent } from '../components/team-member-dialog/team-member-dialog.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
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
    CommonModule,
    NgbModule,
    RouterModule.forRoot(routes),
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
