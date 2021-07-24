import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberDialogComponent } from '../add-member-dialog/add-member-dialog.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavBarComponent implements OnInit {
  @Output() changeView = new EventEmitter<boolean>();
  @Input() label: string = '';
  constructor(private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onChangeView() {
    this.changeView.emit(true)
  }

  addTeamMember() {
    this.dialog.open(AddMemberDialogComponent, {
      width: '40%',
    });
  }
}
