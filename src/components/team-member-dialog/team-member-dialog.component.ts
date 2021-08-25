import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { AppActions } from '../../store/app.action';
import { getMembersList } from '../../store/app.selector';
import { User } from '../../models/user.model';
import { ConfirmationDialogService } from '../../services/dialog-confirmation.service';

@Component({
  selector: 'app-team-member-dialog',
  templateUrl: './team-member-dialog.component.html',
  styleUrls: ['./team-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements OnInit {
  name = new FormControl();
  email = new FormControl();
  id: string = '';
  members: User[] = [];
  constructor(private store$: Store,
    private confirmationDialogService: ConfirmationDialogService,
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(AppActions.getTeamMembers());
    this.store$.select(getMembersList).subscribe(data => this.members = data);
    this.confirmationDialogService.confirmed().subscribe((isConfirmed) => {
      if (isConfirmed) {
        this.store$.dispatch(AppActions.deleteTeamMember(this.id));
      }
    });
  }

  onAdd() {
    this.store$.dispatch(AppActions.addTeamMember(this.email.value, this.name.value));
  }

  onDelete(id: string) {
    this.id = id;
    this.confirmationDialogService.open({ title: 'are you sure you want to delete this member?', cancelText: 'cancel', confirmText: 'confirm' });
  }
}
