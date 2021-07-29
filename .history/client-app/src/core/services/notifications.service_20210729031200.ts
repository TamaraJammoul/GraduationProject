import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '@core/components/popup/popup.component';

@Injectable({ providedIn: 'root' })
export class NotificationsService {

  constructor(private modalService: NgbModal) { }

  openPopup(title: string, message: string): void {
    const modalRef = this.modalService.open(PopupComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
  }

}
