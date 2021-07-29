import { HeaderComponent } from '@libs/core/components/header/header.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from '@root/fakes/fakes.utils';
import { provideMockStore } from '@ngrx/store/testing';
import { FakesModule } from '@root/fakes/fakes.module';
// import { TranslationService } from '@libs/core/services/translation.service';
// import { spy } from 'sinon';
// import { Lang } from '@libs/core/models/lang.enum';
// import { coreActions } from '@libs/core/store/core.actions';
// import { BsTestHelper } from '@root/fakes/bs-test.helper';

describe(HeaderComponent.name, () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  // let translationService: TranslationService;
  // let store: MockStore;
  // let bsTestHelper: BsTestHelper<HeaderComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        FakesModule
      ],
      declarations: [HeaderComponent],
      providers: [
        provideMockStore()
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    // bsTestHelper = new BsTestHelper(fixture);
    component = fixture.componentInstance;
    // translationService = TestBed.inject(TranslationService);
    // store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // Commented because not yet implemented
  // it('should call use with fr when user changes to fr translation from en lang ', () => {
  //   fixture.detectChanges();
  //   bsTestHelper.click('lang-en');
  //   fixture.detectChanges();
  //   const spyFn = spy(translationService, 'use');
  //   fixture.detectChanges();
  //   bsTestHelper.click('lang-fr');
  //   fixture.detectChanges();
  //   expect(spyFn.withArgs(Lang.French).callCount).toBe(1);
  //   spyFn.restore();
  // });

  // Commented because not yet implemented
  // it('should call use with en when user chooses en translation', () => {
  //   const spyFn = spy(translationService, 'use');
  //   fixture.detectChanges();
  //   bsTestHelper.click('lang-en');
  //   fixture.detectChanges();
  //   expect(spyFn.withArgs(Lang.English).callCount).toBe(1);
  //   spyFn.restore();
  // });

  // Commented because not yet implemented
  // it('should call logout when user clicks on logout button', () => {
  //   const spyFn = spy(store, 'dispatch');
  //   fixture.detectChanges();
  //   bsTestHelper.click('logout');
  //   fixture.detectChanges();
  //   expect(spyFn.withArgs(coreActions.logout()).callCount).toBe(1);
  //   spyFn.restore();
  // });

});
