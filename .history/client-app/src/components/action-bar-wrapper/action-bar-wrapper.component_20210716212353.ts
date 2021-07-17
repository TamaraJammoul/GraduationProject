import { Component, ContentChildren, QueryList, AfterContentInit, ChangeDetectionStrategy } from '@angular/core';
import { ActionBarItemComponent } from '@libs/shared/components/action-bar-item/action-bar-item.component';
@Component({
  selector: 'app-action-bar-wrapper',
  templateUrl: './action-bar-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBarWrapperComponent implements AfterContentInit {

  @ContentChildren(ActionBarItemComponent) items: QueryList<ActionBarItemComponent> | undefined;
  rightActionItems: ActionBarItemComponent[] = [];
  leftActionItems: ActionBarItemComponent[] = [];


  ngAfterContentInit(): void {
    this.items.forEach(item => {
      if (item.alignment === 'left') {
        this.leftActionItems.push(item);
      }
      else {
        this.rightActionItems.push(item);
      }
    });
  }
}
