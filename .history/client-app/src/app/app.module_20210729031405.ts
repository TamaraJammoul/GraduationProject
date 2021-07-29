import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../store/app.effect';
import { reducers } from '../store/app.reducer';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
import { CardImagePlaceholderDirective } from '../components/card-placeholder-image/card-image-placeholder.component';
import { BaseComponent } from '../components/base-component/base-component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { DeleteProjectMemberDialogComponent } from '../components/delete-project-member-dialog/delete-project-member-dialog.component';
import { AddProjectMemberDialogComponent } from '../components/add-project-member-dialog/add-project-member-dialog.component';
import { RenameProjectDialogComponent } from '../components/rename-project-dialog/rename-project-dialog.component';
import { HomeComponent } from '../components/home-page/home-page.component';
import {CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    DeleteProjectMemberDialogComponent,
    AddProjectMemberDialogComponent,
    RenameProjectDialogComponent,
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AddMemberDialogComponent,
    ErrorCardComponent,
    NavBarComponent,
    LabeldButtonComponent,
    PagingComponent,
    BugCardComponent,
    CardImagePlaceholderDirective,
    BaseComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot(reducers),
    BrowserAnimationsModule,
    NgbModule,
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [],
  exports: [MaterialModule],
  bootstrap: [AppComponent],
  entryComponents: [
    AddMemberDialogComponent,
    DeleteProjectMemberDialogComponent,
    AddProjectMemberDialogComponent,
    RenameProjectDialogComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
