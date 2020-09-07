import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  @Output() drawerToggle = new EventEmitter();
  @ViewChild(MatMenuTrigger) notifyMenu: MatMenuTrigger;
  @ViewChild(MatMenuTrigger) messageMenu: MatMenuTrigger;

  constructor() {}
  openMessagaMenu() {
    console.log(this.messageMenu)
    this.messageMenu.openMenu();
  }
  openNotifyMenu() {
    this.notifyMenu.openMenu();
  }
  ngOnInit(): void {}

  drawerToggled() {
    // You can give any function name
    this.drawerToggle.emit();
  }
}
