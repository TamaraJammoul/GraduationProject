import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberDialogComponent } from './delete-project-member-dialog.component';

describe('AddMemberDialogComponent', () => {
  let component: AddMemberDialogComponent;
  let fixture: ComponentFixture<AddMemberDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMemberDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
