import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { coreActions } from '@libs/core/store/core.actions';
import { WINDOW_REF } from '@libs/shared/settings/common.settings';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IdleAlertModalComponent } from '@libs/core/components/idle-alert-modal/idle-alert-modal.component';
import { idleConstants } from '@libs/core/models/idle.constants';

@Injectable({ providedIn: 'root' })
export class IdleService {
  idleCount = 0;
  constructor(private store: Store, @Inject(WINDOW_REF) private winRef: any, private modalService: NgbModal) {
    this.winRef.addEventListener('mousemove', () => { this.resetIdle(); });
  }

  resetIdle(): void {
    this.idleCount = 0;
  }

  scheduleIdleCheck(): void {
    this.store.dispatch(coreActions.scheduleIdleCheck());
  }

  isIdle(): boolean {
    this.idleCount += 1;
    return this.idleCount > idleConstants.maximumIdleChecksBeforeLogout;
  }

  displayIdleAlert(onReset: () => void, onTimeout: () => void): void {
    const modalRef = this.modalService.open(IdleAlertModalComponent);
    modalRef.componentInstance.onReset = onReset;
    modalRef.componentInstance.onTimeout = onTimeout;
  }
}
