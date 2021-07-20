import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';
import { AddProjectMemberDialogComponent } from '../add-project-member-dialog/add-project-member-dialog.component';
import { DeleteProjectMemberDialogComponent } from '../delete-project-member-dialog/delete-project-member-dialog.component'
import { RenameProjectDialogComponent } from '../rename-project-dialog/rename-project-dialog.component'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private store$: Store,) { }

  ngOnInit(): void {
  }

  addProjectTeamMember() {
    this.dialog.open(AddProjectMemberDialogComponent, {
      width: '40%',
    });
  }

  deleteProjectTeamMember(projectId: string) {
    this.dialog.open(DeleteProjectMemberDialogComponent, {
      width: '40%',
      data: projectId
    });
  }

  deleteProject(projectId: string) {
    this.store$.dispatch(AppActions.deleteProject(projectId));
  }

  renameProject(projectId: string) {
    this.dialog.open(RenameProjectDialogComponent, {
      width: '40%',
      data: projectId
    });
  }
}
