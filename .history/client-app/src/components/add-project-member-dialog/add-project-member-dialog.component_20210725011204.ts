import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { AppActions } from '../../store/app.action';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-project-member-dialog',
  templateUrl: './add-project-member-dialog.component.html',
  styleUrls: ['./add-project-member-dialog.component.scss']
})
export class AddProjectMemberDialogComponent implements OnInit {
  control = new FormControl();

  constructor(private store$: Store,
    public dialogRef: MatDialogRef<AddProjectMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.store$.dispatch(AppActions.addProjectTeamMember(this.control.value, this.data));
  }
}
