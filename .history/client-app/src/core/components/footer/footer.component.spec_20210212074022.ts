import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from '@root/fakes/fakes.utils';
import { FakesModule } from '@root/fakes/fakes.module';
import { FooterComponent } from '@libs/core/components/footer/footer.component';


describe(FooterComponent.name, () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [FakesModule],
      declarations: [
        FooterComponent
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });


});
