import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-labeld-button',
  templateUrl: './labeld-button.component.html',
  styleUrls: ['./labeld-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabeldButtonComponent implements OnInit {

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();
  @Input() label: string = '';
  @Input() iconPosition = 'right';
  @Input() disabled: boolean = false;
  @Input() isSaveButton = false;
  @Input() classes = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.buttonClicked.emit();
  }

  getClasses() {
    return 'labeld-button-container ' + this.classes;
  }
}
