import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { AppActions } from '../../store/app.action';
@Component({
  selector: 'app-add-project-member-dialog',
  templateUrl: './add-project-member-dialog.component.html',
  styleUrls: ['./add-project-member-dialog.component.scss']
})
export class AddProjectMemberDialogComponent implements OnInit {
   control = new FormControl();

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.store$.dispatch(AppActions.addTeamMember(this.control.value));
  }
}
