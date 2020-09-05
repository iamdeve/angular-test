import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  @Output() drawerToggle = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  drawerToggled() {
    // You can give any function name
    this.drawerToggle.emit();
  }
}
