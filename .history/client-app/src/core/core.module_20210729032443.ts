import { ReferenceDataObjectTransformer } from '@core/transformers/reference-data-object-transformer.service';
import { NgModule } from '@angular/core';
import { AppComponent } from '@core/components/app/app.component';
import { StoreModule } from '@ngrx/store';
import { CORE_FEATURE_NAME } from '@core/store/core.state';
import { reducers } from '@core/store/core.reducers';
import { TranslationService } from '@core/services/translation.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreEffects } from '@core/store/core.effects';
import { environment } from '@root/environment';
import { PopupComponent } from '@core/components/popup/popup.component';
import { BetaToggleComponent } from '@core/components/beta-toggle/beta-toggle.component';
import { AutoLoginComponent } from '@core/components/auto-login/auto-login.component';
import { FooterComponent } from '@core/components/footer/footer.component';
import { SideBarComponent } from '@core/components/side-bar/side-bar.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { IdleAlertModalComponent } from '@core/components/idle-alert-modal/idle-alert-modal.component';
import { CorrelationInterceptor } from '@core/services/correlation.interceptor';
import { ToastComponent } from '@core/components/toast/toast.component';
import { AlertComponent } from '@core/components/alert/alert.component';
import { LegalMentionsModalComponent } from '@core/components/legal-mentions-modal/legal-mentions-modal.component';
import { TableComponent } from '@core/components/table/table.component';
import { AccessDeniedComponent } from '@core/components/access-denied/access-denied.component';
import { SnackbarNotificationComponent } from '@core/components/snack-bar-notification/snackbar-notification.component';
import { SideContentComponent } from '@core/components/side-content/side-content.component';
import { SearchComponent } from '@core/components/search/search.component';
import { AppNavigationListComponent } from '@core/components/app-navigation-list/navigation-list.component';
import { NavigationListItemComponent } from '@core/components/navigation-list-item/navigation-list-item.component';
import { MergeSelectableDataTransformer } from '@core/transformers/merge-selectable-data-transformer.service';
import { SplitSelectableDataTransformer } from '@core/transformers/split-selectable-data-transformer.service';
import { SplitFeaturableDataTransformer } from '@core/transformers/spilt-featurable-data-transformer.service';
import { ReferenceInterSectionCompareTransformer } from '@core/transformers/reference-intersection-compare-transformer';
import { ObjectDataCompareTransformer } from '@core/transformers/object-data-compare-transformer.service';
import { SpinnerService } from '@core/services/spinner.service';
import { SpinnerInterceptorService } from '@core/services/spinner-interceptor.service';
import { SuccessMessageInterceptorService } from '@core/services/success-notification-interceptor';
import { SpinnerComponent } from '@core/components/spinner/spinner.component';
import { AppTitleComponentService } from '@core/services/app-title-component.service';
import { Title } from '@angular/platform-browser';

@NgModule({
  imports: [
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [environment.authUrl, environment.apiUrl],
        sendAccessToken: true,
      },
    }),
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
    NavigationListItemComponent,
    SnackbarNotificationComponent
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
    MergeSelectableDataTransformer,
    SplitFeaturableDataTransformer,
    SplitSelectableDataTransformer,
    ReferenceDataObjectTransformer,
    ReferenceInterSectionCompareTransformer,
    ObjectDataCompareTransformer,
    Title,
    AppTitleComponentService,
  ],
})
export class CoreModule {
  constructor(translationService: TranslationService) {
    translationService.init();
  }
}
