import { Component, OnInit, Input } from '@angular/core';
import { Bug } from '../../models/bug.model';
@Component({
  selector: 'error-card',
  templateUrl: './error-card.component.html',
})
export class ErrorCardComponent implements OnInit {
  @Input()
  bug!: Bug;
  constructor() { }

  ngOnInit(): void {
  }

}
