import { Component, ChangeDetectionStrategy, Inject, OnInit} from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import {SnackbarStatusEnum, SnackbarData} from '../../models/snackbar-data.model';
import { Router, ActivationStart } from '@angular/router';
@Component({
  selector: 'app-gallery-manager',
  templateUrl: './snackbar-notification.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarNotificationComponent implements OnInit {
    mapStatusToIcon = {
        [SnackbarStatusEnum.SUCCESS.toString()] : 'check_circle',
        [SnackbarStatusEnum.INFO.toString()]: 'info',
        [SnackbarStatusEnum.ERROR.toString()]: 'error',
        [SnackbarStatusEnum.WARNING.toString()]: 'warning',
        [SnackbarStatusEnum.NOTIFICATION.toString()]: 'notification_important'
    };
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackbarData,
                public snackBarRef: MatSnackBarRef<SnackbarNotificationComponent>,
                private router: Router) {
    }

    ngOnInit(): void {
        this.router.events.subscribe(e => {
          if(e instanceof ActivationStart) {
            this.snackBarRef.dismiss();
          }
        });
      }
}
