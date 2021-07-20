import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { AppActions } from '../../store/app.action';
@Component({
  selector: 'app-delete-project-member-dialog',
  templateUrl: './delete-project-member-dialog.component.html',
  styleUrls: ['./delete-project-member-dialog.component.scss']
})
export class DeleteProjectMemberDialogComponent implements OnInit {
   control = new FormControl();

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.store$.dispatch(AppActions.deleteProjectTeamMember(this.control.value));
  }
}
