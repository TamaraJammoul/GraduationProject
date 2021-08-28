import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberDialogComponent } from '../team-member-dialog/team-member-dialog.component';
import { isAdmin } from '../../store/app.selector';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavBarComponent implements OnInit {
  @Output() changeView = new EventEmitter<boolean>();
  @Input() label: string = '';

  isAdmin$!: Observable<boolean>;
  isAdmin: boolean = false;
  constructor(private dialog: MatDialog, private store$: Store) { }

  ngOnInit(): void {
    this.isAdmin$ = this.store$.select(isAdmin);
    this.store$.select(isAdmin).subscribe(data => this.isAdmin = data)
  }

  onChangeView() {
    if (this.isAdmin) {
      this.changeView.emit(true);
    }
  }

  addTeamMember() {
    this.dialog.open(AddMemberDialogComponent, {
      width: '40%',
    });
  }
}
