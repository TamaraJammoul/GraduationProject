import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { AppActions } from '../../store/app.action';
import { getMembersList } from '../../store/app.selector';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-team-member-dialog',
  templateUrl: './team-member-dialog.component.html',
  styleUrls: ['./team-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements OnInit {
  name = new FormControl();
  email = new FormControl();

  members: User[] = [];
  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.store$.dispatch(AppActions.getTeamMembers());
    this.store$.select(getMembersList).subscribe(data => this.members = data);
  }

  onAdd() {
    this.store$.dispatch(AppActions.addTeamMember(this.email.value, this.name.value));
  }

  onDelete(email: string) {
    this.store$.dispatch(AppActions.deleteTeamMember(email));
  }
}
