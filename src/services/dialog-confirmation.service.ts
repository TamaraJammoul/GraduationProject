import { Injectable } from '@angular/core';
import { ConfirmationDialogData } from '../models/dialog-confirmation-data.model';
import { Observable, Subject } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../components/dialog-confirmation/dialog-confirmation.component';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ConfirmationDialogService {
    dialogRef: MatDialogRef<ConfirmationDialogComponent> | undefined;
    dialogRefClose$ = new Subject<any>();
    constructor(private dialog: MatDialog) { }

    public open(options: ConfirmationDialogData) {
        this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            data: options,
            panelClass: 'notification-dialog',
            width:'600px'
        });
        this.dialogRef.afterClosed().pipe(
            take(1))
            .subscribe((result) => {
                this.dialogRefClose$.next(result);
            });
    }
    public confirmed(): Observable<any> {
        return this.dialogRefClose$;
    }
}
