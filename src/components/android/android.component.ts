import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AndroidComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
}
