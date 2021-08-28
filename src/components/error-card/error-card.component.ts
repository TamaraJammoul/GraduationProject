import { Component, OnInit, Input } from '@angular/core';
import { Error } from '../../models/error.model';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';
import { User } from '../../models/user.model';
import { selectedProject, isAdmin } from '../../store/app.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'error-card',
  templateUrl: './error-card.component.html',
})
export class ErrorCardComponent implements OnInit {
  @Input()
  error!: Error;
  users: User[] = [];
  isAdmin$: Observable<boolean> | undefined;
  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.store$.select(selectedProject).subscribe(data => {
      this.users = data.users;
    });
    this.isAdmin$ = this.store$.select(isAdmin);
  }

  onDelete(id: string) {
    this.store$.dispatch(AppActions.deleteError(id));
  }

  AssignError(userId: string) {
    this.store$.dispatch(AppActions.convertErrorToBug(this.error.id, userId, this.error.fileName));
  }
}
