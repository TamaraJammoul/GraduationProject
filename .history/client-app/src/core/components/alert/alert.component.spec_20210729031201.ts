import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from '@root/fakes/fakes.utils';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { FakeState } from '@root/fakes/fake.state';
import { FakesModule } from '@root/fakes/fakes.module';
import { AlertComponent } from '@core/components/alert/alert.component';
import { BsTestHelper } from '@root/fakes/bs-test.helper';
import { AlertType } from '@core/models/alert-type.enum';
import { AlertMessage } from '@core/models/alert-message.model';
import { spy } from 'sinon';
import { coreActions } from '@core/store/core.actions';

describe(AlertComponent.name, () => {
  let fixture: ComponentFixture<AlertComponent>;
  let component: AlertComponent;
  let bsTestHelper: BsTestHelper<AlertComponent>;
  let mockStore: MockStore;
  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        FakesModule,
      ],
      declarations: [AlertComponent],
      providers: [
        provideMockStore({
          initialState: new FakeState()
            .initCoreState({}).value
        }),

      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    bsTestHelper = new BsTestHelper(fixture);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);

  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  xit('should close the alert and dispatch hide function when hide event is called', () => {
    const spyFn = spy(mockStore, 'dispatch');
    component.closed = false;
    component.hide();
    fixture.detectChanges();

    expect(spyFn.withArgs(coreActions.hideAlert()).callCount).toBe(1);
    expect(bsTestHelper.getByDataTestId('warningMessage')).toBeFalsy();
    spyFn.restore();
  });

  it('should show success template when type is Success', () => {
    const msg = { title: 'Title', message: 'testing', alertType: AlertType.Success } as AlertMessage;
    mockStore.setState(new FakeState().initCoreState({ alertMessage: msg }).value);
    fixture.detectChanges();
    expect(bsTestHelper.getByDataTestId('successMessage')).toBeTruthy();
  });

  it('should show error template when type is Error', () => {
    const msg = { title: 'Title', message: 'testing', alertType: AlertType.Error } as AlertMessage;
    mockStore.setState(new FakeState().initCoreState({ alertMessage: msg }).value);
    fixture.detectChanges();
    expect(bsTestHelper.getByDataTestId('errorMessage')).toBeTruthy();
  });

  it('should show info template when type is Info', () => {
    const msg = { title: 'Title', message: 'testing', alertType: AlertType.Info } as AlertMessage;
    mockStore.setState(new FakeState().initCoreState({ alertMessage: msg }).value);
    fixture.detectChanges();
    expect(bsTestHelper.getByDataTestId('infoMessage')).toBeTruthy();
  });

  it('should show warning template when type is Warning', () => {
    const msg = { title: 'Title', message: 'testing', alertType: AlertType.Warning } as AlertMessage;
    mockStore.setState(new FakeState().initCoreState({ alertMessage: msg }).value);
    fixture.detectChanges();
    expect(bsTestHelper.getByDataTestId('warningMessage')).toBeTruthy();
  });

});
