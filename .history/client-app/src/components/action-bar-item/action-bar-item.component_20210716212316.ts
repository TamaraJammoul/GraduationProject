import { Component, Input, ViewChild, ChangeDetectionStrategy, TemplateRef } from '@angular/core';

enum ActionBarItemAlignment {
  Left = 'left',
  Right = 'right',
}

@Component({
  selector: 'app-action-bar-item',
  // eslint-disable-next-line quotes
  template: `<ng-template #itemTemplate>
    <div [class]="getClasses()" [class.no-action-bar-item-shadow]="!hasShadow" [class.no-action-item-background]="!hasBackground">
    <ng-content></ng-content>
    </div></ng-template>`,
  styleUrls: ['./action-bar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None
})

export class ActionBarItemComponent {
  @Input() alignment: string = ActionBarItemAlignment.Right;
  @Input() hasShadow = true;
  @Input() hasBackground = true;
  @Input() classes = '';
  @ViewChild('itemTemplate', { static: true })
  template: TemplateRef<any> | undefined;

  getClasses() {
    return 'action-bar-item ' + this.classes;
  }
}
