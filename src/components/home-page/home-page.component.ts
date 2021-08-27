import { Component, OnInit } from '@angular/core';
import { isUserAuth } from '../../store/app.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomeComponent implements OnInit {
  isAuth$: Observable<boolean> | undefined;
  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.isAuth$ = this.store$.select(isUserAuth);
  }

  onLogout() {
    localStorage.clear();
  }

}
