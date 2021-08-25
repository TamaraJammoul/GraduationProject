import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rename-project-dialog',
  templateUrl: './rename-project-dialog.component.html',
  styleUrls: ['./rename-project-dialog.component.scss']
})
export class RenameProjectDialogComponent {
  control = new FormControl();

  constructor(private store$: Store,
    public dialogRef: MatDialogRef<RenameProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }


  onSubmit() {
    this.store$.dispatch(AppActions.renameProject(this.data, this.control.value));
    this.dialogRef.close();
  }
}
