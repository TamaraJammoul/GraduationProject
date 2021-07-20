import { Component, OnInit, Input } from '@angular/core';
import { Bug } from '../../models/bug.model';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';

@Component({
  selector: 'bug-card',
  templateUrl: './bug-card.component.html',
})
export class BugCardComponent implements OnInit {
  @Input()
  bug!: Bug;
  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onResolve(id: string) {
    this.store$.dispatch(AppActions.resolveBug(id));
  }
}
