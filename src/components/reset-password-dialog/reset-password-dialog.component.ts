import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
})
export class ResetPasswordDialogComponent {
  control = new FormControl();

  constructor(private store$: Store,
    public dialogRef: MatDialogRef<ResetPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }


  onSubmit() {
    this.store$.dispatch(AppActions.resetPassword( this.control.value));
    this.dialogRef.close();
  }
}
