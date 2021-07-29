import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarNotificationComponent } from '@core/components/snack-bar-notification/snackbar-notification.component';
import { SnackbarStatusEnum } from '@core/models/snackbar-data.model';
@Injectable({
    providedIn: 'root'
})

export class SnackBarNotificationService {
    config: MatSnackBarConfig = {
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        panelClass: SnackbarStatusEnum.NOTIFICATION
    };

    constructor(private snackBar: MatSnackBar) {
        /** DI **/
    }

    success(message: string,
        verticalPosition: string = this.config.verticalPosition,
        horizontalPosition: string = this.config.horizontalPosition) {
        this.open(message, SnackbarStatusEnum.SUCCESS, verticalPosition, horizontalPosition);
    }

    error(message: string,
        verticalPosition: string = this.config.verticalPosition,
        horizontalPosition: string = this.config.horizontalPosition) {
        this.open(message, SnackbarStatusEnum.ERROR, verticalPosition, horizontalPosition);
    }

    warning(message: string,
        verticalPosition: string = this.config.verticalPosition,
        horizontalPosition: string = this.config.horizontalPosition) {
        this.open(message, SnackbarStatusEnum.WARNING, verticalPosition, horizontalPosition);
    }

    info(message: string,
        verticalPosition: string = this.config.verticalPosition,
        horizontalPosition: string = this.config.horizontalPosition) {
        this.open(message, SnackbarStatusEnum.INFO, verticalPosition, horizontalPosition);
    }

    notification(message: string,
        verticalPosition: string = this.config.verticalPosition,
        horizontalPosition: string = this.config.horizontalPosition) {
        this.open(message, SnackbarStatusEnum.NOTIFICATION, verticalPosition, horizontalPosition);
    }

    open(message: string,
        panelClass: SnackbarStatusEnum = SnackbarStatusEnum.ERROR,
        verticalPosition: string = this.config.verticalPosition,
        horizontalPosition: string = this.config.horizontalPosition) {
        this.snackBar.openFromComponent(SnackbarNotificationComponent, {
            horizontalPosition,
            verticalPosition,
            panelClass,
            duration: 3000,
            data: {
                message,
                status: panelClass,

            }
        } as MatSnackBarConfig);
    }
}
