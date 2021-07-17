import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../libs/material.module';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { AddMemberDialogComponent } from '../components/add-member-dialog/add-member-dialog.component';
import { ErrorCardComponent } from '../components/error-card/error-card.component';
import { NavBarComponent } from '../components/navbar/navbar.component';
import { ActionBarItemComponent } from '../components/action-bar-item/action-bar-item.component';
import { ActionBarWrapperComponent } from '../components/action-bar-wrapper/action-bar-wrapper.component';
import { LabeldButtonComponent } from '../components/labeld-button/labeld-button.component';
import { PagingComponent } from '../components/paging/paging.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AddMemberDialogComponent,
    ErrorCardComponent,
    NavBarComponent,
    ActionBarItemComponent,
    ActionBarWrapperComponent,
    LabeldButtonComponent,
    PagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddMemberDialogComponent]
})
export class AppModule { }
