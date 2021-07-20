import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { AppActions } from '../../store/app.action';
@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements OnInit {
  control = new FormControl();
  members: string[] = [];
  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.store$.dispatch(AppActions.addTeamMember(this.control.value));
  }

  onDelete(email: string) {
    this.store$.dispatch(AppActions.deleteTeamMember(email));
  }
}
