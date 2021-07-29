import { FakesModule } from '@root/fakes/fakes.module';
import { configureTestSuite } from '@root/fakes/fakes.utils';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { spy } from 'sinon';
import { IdleAlertModalComponent } from '@libs/core/components/idle-alert-modal/idle-alert-modal.component';
import { MockComponent } from 'ng-mocks';
import { SvgIconComponent } from '@libs/shared/components/svg-icon/svg-icon.component';
import { BsTestHelper } from '@root/fakes/bs-test.helper';


describe(IdleAlertModalComponent.name, () => {
  let component: IdleAlertModalComponent;
  let fixture: ComponentFixture<IdleAlertModalComponent>;
  let bsTestHelper: BsTestHelper<IdleAlertModalComponent>;
  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [FakesModule],
      declarations: [
        MockComponent(SvgIconComponent),
        IdleAlertModalComponent
      ],
      providers: [provideMockStore()]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(IdleAlertModalComponent);
    component = fixture.componentInstance;
    bsTestHelper = new BsTestHelper(fixture);

    component.onReset = () => { };
    component.onTimeout = () => { };
  });
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call reset timeout when resetTimeout is called', () => {
    const spyFyn = spy(component, 'resetTimeout');
    bsTestHelper.click('resetTimeout');
    fixture.detectChanges();
    expect(spyFyn.calledOnce).toBeTruthy();
    spyFyn.restore();
  });

  it('should call reset timeout when button is clicked', () => {
    const spyFn = spy(component, 'resetTimeout');
    bsTestHelper.click('resetTimeout');
    fixture.detectChanges();
    expect(spyFn.callCount).toBe(1);
    spyFn.restore();
  });

});
