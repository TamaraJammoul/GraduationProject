import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarNotificationComponent } from '../components/snack-bar-notification/snackbar-notification.component';
import { SnackbarStatusEnum } from '../models/snackbar-data.model';
@Injectable({
    providedIn: 'root'
})

export class SnackBarNotificationService {
    config: MatSnackBarConfig = {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: SnackbarStatusEnum.NOTIFICATION
    };

    constructor(private snackBar: MatSnackBar) {
    }

    success({ message, verticalPosition = this.config.verticalPosition, horizontalPosition = this.config.horizontalPosition }: { message: string; verticalPosition?: string; horizontalPosition?: string; }) {
        this.open({ message, panelClass: SnackbarStatusEnum.SUCCESS, verticalPosition, horizontalPosition });
    }

    error({ message, verticalPosition = this.config.verticalPosition, horizontalPosition = this.config.horizontalPosition }: { message: string; verticalPosition?: string; horizontalPosition?: string; }) {
        this.open({ message, panelClass: SnackbarStatusEnum.ERROR, verticalPosition, horizontalPosition });
    }

    warning({ message, verticalPosition = this.config.verticalPosition, horizontalPosition = this.config.horizontalPosition }: { message: string; verticalPosition?: string; horizontalPosition?: string; }) {
        this.open({ message, panelClass: SnackbarStatusEnum.WARNING, verticalPosition, horizontalPosition });
    }

    info({ message, verticalPosition = this.config.verticalPosition, horizontalPosition = this.config.horizontalPosition }: { message: string; verticalPosition?: string; horizontalPosition?: string; }) {
        this.open({ message, panelClass: SnackbarStatusEnum.INFO, verticalPosition, horizontalPosition });
    }

    notification({ message, verticalPosition = this.config.verticalPosition, horizontalPosition = this.config.horizontalPosition }: { message: string; verticalPosition?: string; horizontalPosition?: string; }) {
        this.open({ message, panelClass: SnackbarStatusEnum.NOTIFICATION, verticalPosition, horizontalPosition });
    }

    open({ message, panelClass = SnackbarStatusEnum.ERROR, verticalPosition = this.config.verticalPosition, horizontalPosition = this.config.horizontalPosition }: { message: string; panelClass?: SnackbarStatusEnum; verticalPosition?: string; horizontalPosition?: string; }) {
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
