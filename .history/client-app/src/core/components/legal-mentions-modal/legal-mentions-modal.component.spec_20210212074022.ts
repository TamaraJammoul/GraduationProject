import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from '@root/fakes/fakes.utils';
import { FakesModule } from '@root/fakes/fakes.module';
import { LegalMentionsModalComponent } from '@libs/core/components/legal-mentions-modal/legal-mentions-modal.component';
import { BsTestHelper } from '@root/fakes/bs-test.helper';

describe(LegalMentionsModalComponent.name, () => {
  let component: LegalMentionsModalComponent;
  let fixture: ComponentFixture<LegalMentionsModalComponent>;
  let bsTestHelper: BsTestHelper<LegalMentionsModalComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [FakesModule],
      declarations: [LegalMentionsModalComponent],
      providers: []
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalMentionsModalComponent);
    component = fixture.componentInstance;
    bsTestHelper = new BsTestHelper(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show the elements inside the legal mentions modal', () => {
    component.url = window.location.href.replace(window.location.pathname, '');
    const appUrl = bsTestHelper.getByDataTestId('appUrl');
    fixture.detectChanges();

    expect(appUrl.nativeElement.innerText).toBe(component.url);
  });
});
