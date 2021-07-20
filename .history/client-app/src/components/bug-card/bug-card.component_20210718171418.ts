import { Component, OnInit, Input } from '@angular/core';
import { Bug } from '../../models/bug.model';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';

@Component({
  selector: 'error-card',
  templateUrl: './error-card.component.html',
})
export class ErrorCardComponent implements OnInit {
  @Input()
  bug!: Bug;
  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onDelete(id: string) {
    this.store$.dispatch(AppActions.deleteError(id));
  }
}
