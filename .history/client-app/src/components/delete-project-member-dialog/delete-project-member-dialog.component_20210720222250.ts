import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { AppActions } from '../../store/app.action';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-project-member-dialog',
  templateUrl: './delete-project-member-dialog.component.html',
  styleUrls: ['./delete-project-member-dialog.component.scss']
})
export class DeleteProjectMemberDialogComponent implements OnInit {
  control = new FormControl();

  constructor(private store$: Store,
    public dialogRef: MatDialogRef<DeleteProjectMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.store$.dispatch(AppActions.deleteProjectTeamMember(this.control.value));
  }
}
