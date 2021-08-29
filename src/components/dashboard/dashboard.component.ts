import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';
import { getBugsList, getErrorsList, getProjectsList, selectedProject, isAdmin } from '../../store/app.selector';
import { Bug } from '../../models/bug.model';
import { Error } from '../../models/error.model';
import { Project } from '../../models/project.model';
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordDialogComponent } from '../reset-password-dialog/reset-password-dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  bugs: Bug[] = [];
  errors: Error[] = [];
  projects: Project[] = [];
  isBugListView = false;
  selectedProject: Project = { } as Project;
  constructor(private store$: Store, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.store$.dispatch(AppActions.getProject());
    this.store$.select(getBugsList).subscribe(data => {
      if (data) {
        this.bugs = data;
      }
    });

    this.store$.select(selectedProject).subscribe(data => {
      if (data) {
        this.selectedProject = data;
        this.store$.dispatch(AppActions.fetchBugs(data.id));
        this.store$.dispatch(AppActions.fetchErrors(data.id));
      }
    });

    this.store$.select(getErrorsList).subscribe(data => {
      if (data) {
        this.errors = data;
      }
    });

    this.store$.select(isAdmin).subscribe(data => {
      if (data === false) {
        this.isBugListView = true;
      }
    })

    this.store$.select(getProjectsList).subscribe(data => {
      if (data) {
        this.projects = data;
        this.store$.dispatch(AppActions.selectProject(data[0]));
      }
    });
  }

  changeView() {
    this.isBugListView = !this.isBugListView;
    this.store$.dispatch(AppActions.fetchBugs(this.selectedProject.id));
  }

  resetPassword() {
    this.dialog.open(ResetPasswordDialogComponent, {
      width: '40%',
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl(`/login`);
  }
}
