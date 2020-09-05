import { AdminService } from './../../../admin.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  @ViewChild('drawer') drawer: MatSidenav;

  public links: any = [];

  constructor(private admin: AdminService) {}

  ngOnInit(): void {
    this.links = this.admin.getLinks();
  }

  drawerToggle() {
    this.drawer.toggle();
  }
}
