import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../store/app.action';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rename-project-dialog',
  templateUrl: './rename-project-dialog.component.html',
  styleUrls: ['./rename-project-dialog.component.scss']
})
export class RenameProjectDialogComponent {

  constructor(private store$: Store,
    public dialogRef: MatDialogRef<RenameProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      name: string,
      id: string
    }) { }


  onSubmit() {
    this.store$.dispatch(AppActions.renameProject(this.data.id, this.data.name));
  }
}
