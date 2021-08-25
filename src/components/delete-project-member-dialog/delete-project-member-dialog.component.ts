import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../models/project.model';
import { getProjectsList } from '../../store/app.selector';
import { User } from '../../models/user.model';
import { ConfirmationDialogService } from '../../services/dialog-confirmation.service';

@Component({
  selector: 'app-delete-project-member-dialog',
  templateUrl: './delete-project-member-dialog.component.html',
  styleUrls: ['./delete-project-member-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteProjectMemberDialogComponent implements OnInit {

  projects: Project[] = [];
  id: string = '';
  constructor(private store$: Store,
    public dialogRef: MatDialogRef<DeleteProjectMemberDialogComponent>,
    private cdr: ChangeDetectorRef,
    private confirmationDialogService: ConfirmationDialogService,
    @Inject(MAT_DIALOG_DATA) public data: Project) { }

  ngOnInit(): void {
    this.store$.select(getProjectsList).subscribe(data => {
      this.projects = data
      this.cdr.detectChanges();
    });

    this.confirmationDialogService.confirmed().subscribe((isConfirmed) => {
      if (isConfirmed) {
        this.store$.dispatch(AppActions.deleteProjectTeamMember(this.id, this.data.id));
      }
    });
  }

  getUsers(): User[] {
    let users: User[] = [];
    this.projects && this.projects.forEach(e => {
      if (e.id === this.data?.id) {
        users = e.users;
      }
    })
    return users;
  }

  onSubmit(id: string) {
    this.id = id;
    this.confirmationDialogService.open({ title: 'are you sure you want to delete this member?', cancelText: 'cancel', confirmText: 'confirm' });
  }
}
