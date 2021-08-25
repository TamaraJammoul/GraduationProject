/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BsTestHelper } from '@root/fakes/bs-test.helper';
import { configureTestSuite } from '@root/fakes/fakes.utils';
import { PagingComponent } from './paging.component';
import { of } from 'rxjs';


describe('PagingComponent', () => {
  let component: PagingComponent;
  let fixture: ComponentFixture<PagingComponent>;
  let bsTestHelper: BsTestHelper<PagingComponent>;

  const previousPageUrl = 'https://localhost/api/v1.0/v1.0/customers?Page=1';
  const nextPageUrl = 'https://localhost/api/v1.0/v1.0/customers?page=3';


  configureTestSuite((() => {
    TestBed.configureTestingModule({
      declarations: [PagingComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingComponent);
    component = fixture.componentInstance;
    bsTestHelper = new BsTestHelper(fixture);
    component.pagingActionFn = () => of();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display previous and next pages buttons', () => {
    component.nextPage = nextPageUrl;
    component.previousPage = previousPageUrl;
    fixture.detectChanges();

    const previousPageButton = bsTestHelper.getByDataTestId('previousPageButton');
    const nextPageButton = bsTestHelper.getByDataTestId('nextPageButton');

    expect(previousPageButton.nativeElement.innerText).toBe('shared.paging.previousPage');
    expect(nextPageButton.nativeElement.innerText).toBe('shared.paging.nextPage');
  });

  it('should not display previous and next pages buttons', () => {
    component.nextPage = undefined;
    component.previousPage = undefined;
    fixture.detectChanges();

    const previousPageButton = bsTestHelper.getByDataTestId('previousPageButton');
    const nextPageButton = bsTestHelper.getByDataTestId('nextPageButton');

    expect(previousPageButton).toBeFalsy();
    expect(nextPageButton).toBeFalsy();
  });

  it('should dispatch goToPage when I click on next and previous page buttons', () => {
    component.nextPage = nextPageUrl;
    component.previousPage = previousPageUrl;

    fixture.detectChanges();
    spyOn(component, 'goToPage');
    bsTestHelper.click('nextPageButton');
    bsTestHelper.click('previousPageButton');

    expect(component.goToPage).toHaveBeenCalledTimes(2);
  });

  it('should not display previous and display next pages buttons', () => {
    component.nextPage = nextPageUrl;
    component.previousPage = undefined;
    fixture.detectChanges();

    const previousPageButton = bsTestHelper.getByDataTestId('previousPageButton');
    const nextPageButton = bsTestHelper.getByDataTestId('nextPageButton');

    expect(previousPageButton).toBeFalsy();
    expect(nextPageButton).toBeTruthy();
  });

  it('should display previous and not display next pages buttons', () => {
    component.nextPage = undefined;
    component.previousPage = nextPageUrl;
    fixture.detectChanges();

    const previousPageButton = bsTestHelper.getByDataTestId('previousPageButton');
    const nextPageButton = bsTestHelper.getByDataTestId('nextPageButton');

    expect(previousPageButton).toBeTruthy();
    expect(nextPageButton).toBeFalsy();
  });


});
