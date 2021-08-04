import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';
import { AddProjectMemberDialogComponent } from '../add-project-member-dialog/add-project-member-dialog.component';
import { DeleteProjectMemberDialogComponent } from '../delete-project-member-dialog/delete-project-member-dialog.component'
import { RenameProjectDialogComponent } from '../rename-project-dialog/rename-project-dialog.component';
import { AddProjectDialogComponent } from '../add-project-dialog/add-project-dialog.component'
import { Project } from '../../models/project.model';
import { getProjectsList } from '../../store/app.selector';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  projects: Project[] = [];
  constructor(private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private store$: Store,) { }

  ngOnInit(): void {
    this.store$.dispatch(AppActions.getProject());
    this.store$.select(getProjectsList).subscribe(data => {
      this.projects = data
      this.cdr.detectChanges();
    });
  }

  addProjectTeamMember(projectId: string) {
    this.dialog.open(AddProjectMemberDialogComponent, {
      width: '40%',
      data: projectId
    });
  }

  addProject() {
    this.dialog.open(AddProjectDialogComponent, {
      width: '40%',
    });
  }

  deleteProjectTeamMember(project: Project) {
    this.dialog.open(DeleteProjectMemberDialogComponent, {
      width: '40%',
      data: project
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
