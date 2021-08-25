import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { AppActions } from '../../store/app.action';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/user.model';
import { getProjectUsersList } from '../../store/app.selector';

@Component({
  selector: 'app-add-project-member-dialog',
  templateUrl: './add-project-member-dialog.component.html',
  styleUrls: ['./add-project-member-dialog.component.scss']
})
export class AddProjectMemberDialogComponent implements OnInit {
  control = new FormControl(); 
  users: User[] = [];
  constructor(private store$: Store,
    private cdr: ChangeDetectorRef,
    private dialogRef: MatDialogRef<AddProjectMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
    this.store$.dispatch(AppActions.fetchProjectUsers(this.data));
    this.store$.select(getProjectUsersList).subscribe(data => {
      this.users = data
      this.cdr.detectChanges()
    });
  }

  onSubmit() {
    this.store$.dispatch(AppActions.addProjectTeamMember(this.control.value, this.data));
    this.dialogRef.close();
  }
}
