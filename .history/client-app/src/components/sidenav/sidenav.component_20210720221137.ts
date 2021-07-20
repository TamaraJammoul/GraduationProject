import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectMemberDialogComponent } from '../add-project-member-dialog/add-project-member-dialog.component';
import { DeleteProjectMemberDialogComponent } from '../delete-project-member-dialog/delete-project-member-dialog.component'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

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
}
