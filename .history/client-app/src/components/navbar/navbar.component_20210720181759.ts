import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavBarComponent implements OnInit {
  @Output() changeView = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  onChangeView(){
    this.changeView.emit(true)
  }
}
