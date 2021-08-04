import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.scss']
})
export class AddProjectDialogComponent {
  control = new FormControl();

  constructor(private store$: Store,
    public dialogRef: MatDialogRef<AddProjectDialogComponent>) { }


  onSubmit() {
    this.store$.dispatch(AppActions.addProject(this.control.value));
    this.dialogRef.close();
  }
}
