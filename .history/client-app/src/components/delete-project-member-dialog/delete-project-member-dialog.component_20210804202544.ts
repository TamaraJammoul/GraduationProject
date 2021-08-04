import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../models/project.model';
import { getProjectsList } from '../../store/app.selector';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-delete-project-member-dialog',
  templateUrl: './delete-project-member-dialog.component.html',
  styleUrls: ['./delete-project-member-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteProjectMemberDialogComponent implements OnInit {

  projects: Project[] = [];

  constructor(private store$: Store,
    public dialogRef: MatDialogRef<DeleteProjectMemberDialogComponent>,
    private cdr: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: Project) { }

  ngOnInit(): void {
    this.store$.select(getProjectsList).subscribe(data => {
      this.projects = data
      this.cdr.detectChanges();
    });
  }

  getUsers(): User[] {
    return this.projects?.find(e => e.id === this.data?.id)?.users ?? [];
  }

  onSubmit(id: string) {
    this.store$.dispatch(AppActions.deleteProjectTeamMember(id, this.data.id));
  }
}
