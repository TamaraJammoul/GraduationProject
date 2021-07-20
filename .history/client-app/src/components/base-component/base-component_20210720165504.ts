import { OnDestroy, Directive } from '@angular/core';
import { Subscription } from 'rxjs';
import { isEmpty } from '../../services/utils.services';
@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class BaseComponent implements OnDestroy {
  protected subscriptions = new Subscription();

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    if(Array.isArray(this.subscriptions)) {
      this.subscriptions.forEach(s => s.unsubscribe());
    }
  }

  isEmpty(data: any) {
    return isEmpty(data);
  }
}
