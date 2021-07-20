import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';
import { getBugsList, getErrorsList, getProjectsList } from '../../store/app.selector';
import { Bug } from '../../models/bug.model';
import { Error } from '../../models/error.model';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  bugs: Bug[] = [];
  errors: Error[] = [];
  projects: Project[] = [];
  isBugListView = false;
  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.store$.dispatch(AppActions.fetchBugs());
    this.store$.dispatch(AppActions.fetchErrors());
    this.store$.dispatch(AppActions.getProject());

    this.store$.select(getBugsList).subscribe(data => {
      if (data) {
        this.bugs = data;
      }
    });

    this.store$.select(getErrorsList).subscribe(data => {
      if (data) {
        this.errors = data;
      }
    });

    this.store$.select(getProjectsList).subscribe(data => {
      if (data) {
        this.projects = data;
      }
    });
  }

}
