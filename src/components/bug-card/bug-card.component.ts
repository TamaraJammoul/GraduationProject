import { Component, OnInit, Input } from '@angular/core';
import { Bug } from '../../models/bug.model';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';
import { isAdmin } from '../../store/app.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'bug-card',
  templateUrl: './bug-card.component.html',
})
export class BugCardComponent implements OnInit {
  @Input()
  bug!: Bug;
  isAdmin$: Observable<boolean> | undefined;

  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.isAdmin$ = this.store$.select(isAdmin);
  }

  onResolve(id: string) {
    this.store$.dispatch(AppActions.resolveBug(id));
  }
}
