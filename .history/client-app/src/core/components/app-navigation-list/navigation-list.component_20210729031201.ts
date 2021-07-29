import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { NavList } from '@core/models/nav-list.model';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavigationListComponent implements OnInit {
  @Input() navList: NavList;


  ngOnInit(): void {
  }

}
