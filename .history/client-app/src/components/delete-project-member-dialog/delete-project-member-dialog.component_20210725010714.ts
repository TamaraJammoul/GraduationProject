import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../models/project.model';
@Component({
  selector: 'app-delete-project-member-dialog',
  templateUrl: './delete-project-member-dialog.component.html',
  styleUrls: ['./delete-project-member-dialog.component.scss']
})
export class DeleteProjectMemberDialogComponent implements OnInit {

  constructor(private store$: Store,
    public dialogRef: MatDialogRef<DeleteProjectMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project) { }

  ngOnInit(): void {
  }

  onSubmit(id: string) {
    this.store$.dispatch(AppActions.deleteProjectTeamMember(id, this.data.id));
  }
}
