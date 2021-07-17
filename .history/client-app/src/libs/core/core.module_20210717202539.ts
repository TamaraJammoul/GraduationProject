import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { StoreModule } from '@ngrx/store';
import { CORE_FEATURE_NAME } from './store/core.state';
import { reducers } from './store/core.reducers';
import { TranslationService } from './services/translation.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreEffects } from './store/core.effects';
import { PopupComponent } from './components/popup/popup.component';
import { BetaToggleComponent } from './components/beta-toggle/beta-toggle.component';
import { AutoLoginComponent } from './components/auto-login/auto-login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { IdleAlertModalComponent } from './components/idle-alert-modal/idle-alert-modal.component';
import { CorrelationInterceptor } from './services/correlation.interceptor';
import { ToastComponent } from './components/toast/toast.component';
import { AlertComponent } from './components/alert/alert.component';
import { LegalMentionsModalComponent } from './components/legal-mentions-modal/legal-mentions-modal.component';
import { TableComponent } from './components/table/table.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { SideContentComponent } from './components/side-content/side-content.component';
import { SearchComponent } from './components/search/search.component';
import { AppNavigationListComponent } from './components/app-navigation-list/navigation-list.component';
import { NavigationListItemComponent } from './components/navigation-list-item/navigation-list-item.component';
import { SpinnerService } from './services/spinner.service';
import { SpinnerInterceptorService } from './services/spinner-interceptor.service';
import { SuccessMessageInterceptorService } from './services/success-notification-interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AppTitleComponentService } from './services/app-title-component.service';
import { Title } from '@angular/platform-browser';
@NgModule({
  imports: [
    StoreModule.forFeature(CORE_FEATURE_NAME, reducers),
    EffectsModule.forFeature([CoreEffects]),
  ],
  exports: [AppComponent, RouterModule, SpinnerComponent, AppNavigationListComponent, NavigationListItemComponent],
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    AutoLoginComponent,
    PopupComponent,
    BetaToggleComponent,
    IdleAlertModalComponent,
    ToastComponent,
    AlertComponent,
    LegalMentionsModalComponent,
    TableComponent,
    AccessDeniedComponent,
    SideContentComponent,
    SearchComponent,
    SpinnerComponent,
    AppNavigationListComponent,
    NavigationListItemComponent
  ],
  providers: [
    SpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorrelationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SuccessMessageInterceptorService,
      multi: true
    },
    Title,
    AppTitleComponentService,
  ],
})
export class CoreModule {
  constructor(translationService: TranslationService) {
    translationService.init();
  }
}
