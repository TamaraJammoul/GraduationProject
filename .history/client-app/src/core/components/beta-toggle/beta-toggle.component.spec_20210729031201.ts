import { BetaToggleComponent } from '@core/components/beta-toggle/beta-toggle.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from '@root/fakes/fakes.utils';
import { FakesModule } from '@root/fakes/fakes.module';
import { provideMockStore } from '@ngrx/store/testing';
import { FakeState } from '@root/fakes/fake.state';
import { spy } from 'sinon';
import { Store } from '@ngrx/store';
import { coreActions } from '@core/store/core.actions';
import { BsTestHelper } from '@root/fakes/bs-test.helper';

describe(BetaToggleComponent.name, () => {
  let component: BetaToggleComponent;
  let fixture: ComponentFixture<BetaToggleComponent>;
  let store: Store;
  let bsTestHelper: BsTestHelper<BetaToggleComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [FakesModule],
      declarations: [BetaToggleComponent],
      providers: [
        provideMockStore({
          initialState: new FakeState().value
        })
      ]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(BetaToggleComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    bsTestHelper = new BsTestHelper(fixture);
  });
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should set toggleBetaMode to false when component is initialized', () => {
    fixture.detectChanges();
    const btnConfig = bsTestHelper.getByDataTestId('btnConfig');
    expect(component.btnConfig.value).toBe(false);
    expect(btnConfig.nativeElement.checked).toBeFalse();
  });

  it('should dispatch toggleBetaMode when toggle btn is toggled', () => {
    const spyFn = spy(store, 'dispatch');
    fixture.detectChanges();
    const btnConfig = bsTestHelper.getByDataTestId('btnConfig');
    bsTestHelper.click('btnConfig');
    expect(btnConfig.nativeElement.checked).toBeTrue();
    expect(component.btnConfig.value).toBe(true);
    expect(spyFn.withArgs(coreActions.toggleBetaMode()).calledOnce).toBeTruthy();
  });
});
