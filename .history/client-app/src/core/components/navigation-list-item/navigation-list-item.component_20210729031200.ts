import { Component, OnInit, Input } from '@angular/core';
import { NavListItem } from '@core/models/nav-list-item.model';
@Component({
  selector: 'app-navigation-list-item',
  templateUrl: './navigation-list-item.component.html',
  styleUrls: ['./navigation-list-item.component.scss'],
})

export class NavigationListItemComponent implements OnInit {

  @Input() title: string;
  @Input() link: string;
  @Input() count: number;
  @Input() active: boolean;
  @Input() expanded = false;
  @Input() rule = '';
  @Input() children: NavListItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
