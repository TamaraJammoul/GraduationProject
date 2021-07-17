/* eslint-disable @angular-eslint/no-output-on-prefix */
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagingComponent {
  @Input() previousPage: string;
  @Input() nextPage: string;
  @Output() onNewPageRequested = new EventEmitter<string>();
  @Input() pagingActionFn: (pageUrl: string) => void;

  goToPage(pageUrl: string): void {
    this.onNewPageRequested.emit(pageUrl);
    //this.pagingActionFn(pageUrl);
  }

  doesShowPaging() {
    return (this.nextPage && this.nextPage.length > 0)
    || (this.previousPage && this.previousPage.length > 0);
  }
}
