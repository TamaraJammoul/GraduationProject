import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from '@root/fakes/fakes.utils';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { FakeState } from '@root/fakes/fake.state';
import { FakesModule } from '@root/fakes/fakes.module';
import { ToastComponent } from '@core/components/toast/toast.component';
import { BsTestHelper } from '@root/fakes/bs-test.helper';
import { ToastType } from '@core/models/toast-type.enum';
import { ToastMessage } from '@core/models/toast-message.model';

describe(ToastComponent.name, () => {
  let fixture: ComponentFixture<ToastComponent>;
  let component: ToastComponent;
  let bsTestHelper: BsTestHelper<ToastComponent>;
  let mockStore: MockStore;
  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        FakesModule,
      ],
      declarations: [ToastComponent],
      providers: [
        provideMockStore({
          initialState: new FakeState()
            .initCoreState({}).value
        })
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    bsTestHelper = new BsTestHelper(fixture);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);

  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show default template when type is Message', () => {
    const msg = { message: 'testing', toastType: ToastType.Message } as ToastMessage;
    mockStore.setState(new FakeState().initCoreState({ toastMessage: msg }).value);
    fixture.detectChanges();
    expect(bsTestHelper.getByDataTestId('defaultMessage')).toBeTruthy();
  });

  it('should show success template when type is Success', () => {
    const msg = { message: 'testing', toastType: ToastType.Success } as ToastMessage;
    mockStore.setState(new FakeState().initCoreState({ toastMessage: msg }).value);
    fixture.detectChanges();
    expect(bsTestHelper.getByDataTestId('successMessage')).toBeTruthy();
  });

  it('should show info template when type is Info', () => {
    const msg = { message: 'testing', toastType: ToastType.Info } as ToastMessage;
    mockStore.setState(new FakeState().initCoreState({ toastMessage: msg }).value);
    fixture.detectChanges();
    expect(bsTestHelper.getByDataTestId('infoMessage')).toBeTruthy();
  });

  it('should show info template when type is Error', () => {
    const msg = { message: 'testing', toastType: ToastType.Error } as ToastMessage;
    mockStore.setState(new FakeState().initCoreState({ toastMessage: msg }).value);
    fixture.detectChanges();
    expect(bsTestHelper.getByDataTestId('errorMessage')).toBeTruthy();
  });

});
