import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../store/app.effect';
import { reducers } from '../store/app.reducer';
import { STATE } from '../store/app.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../libs/material.module';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { AddMemberDialogComponent } from '../components/add-member-dialog/add-member-dialog.component';
import { ErrorCardComponent } from '../components/error-card/error-card.component';
import { NavBarComponent } from '../components/navbar/navbar.component';
import { LabeldButtonComponent } from '../components/labeld-button/labeld-button.component';
import { PagingComponent } from '../components/paging/paging.component';
import { BugCardComponent } from '../components/bug-card/bug-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AddMemberDialogComponent,
    ErrorCardComponent,
    NavBarComponent,
    LabeldButtonComponent,
    PagingComponent,
    BugCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(STATE, reducers),
    EffectsModule.forFeature([AppEffects]),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  exports: [MaterialModule],
  bootstrap: [AppComponent],
  entryComponents: [AddMemberDialogComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
