import { ReferenceDataObjectTransformer } from '@libs/core/transformers/reference-data-object-transformer.service';
import { NgModule } from '@angular/core';
import { AppComponent } from '@libs/core/components/app/app.component';
import { SharedModule } from '@libs/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { CORE_FEATURE_NAME } from '@libs/core/store/core.state';
import { reducers } from '@libs/core/store/core.reducers';
import { TranslationService } from '@libs/core/services/translation.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreEffects } from '@libs/core/store/core.effects';
import { environment } from '@root/environments/environment';
import { PopupComponent } from '@libs/core/components/popup/popup.component';
import { BetaToggleComponent } from '@libs/core/components/beta-toggle/beta-toggle.component';
import { AutoLoginComponent } from '@libs/core/components/auto-login/auto-login.component';
import { FooterComponent } from '@libs/core/components/footer/footer.component';
import { SideBarComponent } from '@libs/core/components/side-bar/side-bar.component';
import { HeaderComponent } from '@libs/core/components/header/header.component';
import { IdleAlertModalComponent } from '@libs/core/components/idle-alert-modal/idle-alert-modal.component';
import { CorrelationInterceptor } from '@libs/core/services/correlation.interceptor';
import { ToastComponent } from '@libs/core/components/toast/toast.component';
import { AlertComponent } from '@libs/core/components/alert/alert.component';
import { LegalMentionsModalComponent } from '@libs/core/components/legal-mentions-modal/legal-mentions-modal.component';
import { ApplicationRoutes } from '@libs/shared/settings/common.settings';
import { TableComponent } from '@libs/core/components/table/table.component';
import { AccessDeniedComponent } from '@libs/core/components/access-denied/access-denied.component';
import { SideContentComponent } from '@libs/core/components/side-content/side-content.component';
import { SearchComponent } from '@libs/core/components/search/search.component';
import { AppNavigationListComponent } from '@libs/core/components/app-navigation-list/navigation-list.component';
import { NavigationListItemComponent } from '@libs/core/components/navigation-list-item/navigation-list-item.component';
// import { AppNavigationListComponent } from '@libs/core/components/app-navigation-list/navigation-list.component';
import { MergeSelectableDataTransformer } from '@libs/core/transformers/merge-selectable-data-transformer.service';
import { SplitSelectableDataTransformer } from '@libs/core/transformers/split-selectable-data-transformer.service';
import { SplitFeaturableDataTransformer } from '@libs/core/transformers/spilt-featurable-data-transformer.service';
import { ReferenceInterSectionCompareTransformer } from '@libs/core/transformers/reference-intersection-compare-transformer';
import { ObjectDataCompareTransformer } from '@libs/core/transformers/object-data-compare-transformer.service';
import { SpinnerService } from '@libs/core/services/spinner.service';
import { SpinnerInterceptorService } from '@libs/core/services/spinner-interceptor.service';
import { SuccessMessageInterceptorService } from '@libs/core/services/success-notification-interceptor';
import { SpinnerComponent } from '@libs/core/components/spinner/spinner.component';
import { AppTitleComponentService } from '@libs/core/services/app-title-component.service';
import { Title } from '@angular/platform-browser';
import { SpaceLayoutTransformer } from '../base-components-module/profile/services/space-layout-transformer.service';
@NgModule({
  imports: [
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [environment.apiUrl],
        sendAccessToken: true,
      },
    }),
    StoreModule.forFeature(CORE_FEATURE_NAME, reducers),
    EffectsModule.forFeature([CoreEffects]),
    SharedModule,
    RouterModule.forChild([
      { path: ApplicationRoutes.AutoLogin, component: AutoLoginComponent },
      { path: ApplicationRoutes.AccessDenied, component: AccessDeniedComponent },
    ]),
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
    MergeSelectableDataTransformer,
    SplitFeaturableDataTransformer,
    SplitSelectableDataTransformer,
    ReferenceDataObjectTransformer,
    SpaceLayoutTransformer,
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
