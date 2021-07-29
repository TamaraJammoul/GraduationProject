import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from '@root/fakes/fakes.utils';
import { FakesModule } from '@root/fakes/fakes.module';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AuthenticationService } from '@core/services/authentication.service';
import { coreActions } from '@core/store/core.actions';
import { HeaderComponent } from '@core/components/header/header.component';
import { MockComponent } from 'ng-mocks';
import { spy } from 'sinon';
import { ToastComponent } from '@core/components/toast/toast.component';
import { SideBarComponent } from '@core/components/side-bar/side-bar.component';
import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authService: AuthenticationService;
  let mockStore: MockStore;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        FakesModule
      ],
      declarations: [
        AppComponent,
        MockComponent(HeaderComponent),
        MockComponent(ToastComponent),
        MockComponent(SideBarComponent)
      ],
      providers: [
        provideMockStore()
      ]
    });
    authService = TestBed.inject<AuthenticationService>(AuthenticationService);
    mockStore = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should configure authentication service when the application starts', () => {
    const configureSpy = spy(authService, 'configure');
    component.ngOnInit();
    expect(configureSpy.calledOnce).toBeTrue();
    configureSpy.restore();
  });

  it('should set initiateAuthenticationFn to initiateAuthentication action when configure is called', () => {
    const configureSpy = spy(authService, 'configure');
    const dispatchSpy = spy(mockStore, 'dispatch');
    component.ngOnInit();
    const initiateAuthenticationFn = configureSpy.args[0][0];
    initiateAuthenticationFn();
    expect(dispatchSpy.withArgs(coreActions.initiateAuthentication()).callCount).toBe(1);
    configureSpy.restore();
    dispatchSpy.restore();
  });

  // Commented because not yet implemented
  // it('should set validateOidcCallbackFn to validateOidcCallback action when configure is called', () => {
  //   const configureSpy = spy(authService, 'configure');
  //   const dispatchSpy = spy(mockStore, 'dispatch');
  //   component.ngOnInit();
  //   const validateOidcCallbackFn = configureSpy.args[0][1];
  //   validateOidcCallbackFn();
  //   expect(dispatchSpy.withArgs(coreActions.validateOidcCallback()).callCount).toBe(1);
  //   configureSpy.restore();
  //   dispatchSpy.restore();
  // });
});
