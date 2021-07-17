import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';
import { Bug } from '../../models/bug.model';
import { getBugsList } from '../../store/app.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  bugs: Bug[] = [];
  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.store$.dispatch(AppActions.fetchBugs());
    this.store$.select(getBugsList).subscribe(data => {
      if (data) {
        this.bugs = data;
      }
    })
  }

}
