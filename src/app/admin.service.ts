import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public links: any = [
    {
      link: 'Home',
      icon: 'home.png',
      active: 'active',
    },
    {
      link: 'Employees',
      icon: 'employees.png',
    },
    {
      link: 'Categories',
      icon: 'categories.png',
      notifications: '3',
    },
    {
      link: 'Lisences',
      icon: 'lisences.png',
    },
    {
      link: 'Collapse menu',
      icon: 'collapse-menu.png',
    },
    {
      link: 'Dispute center',
      icon: 'dispute-center.png',
    },
  ];

  public logs: any = [
    {
      icon: 'tasks',
      title: 'Task finished',
      user: 'Paula',
      desc: 'finished task',
      link: 'Submit expense report',
      time: '3hr',
    },
    {
      icon: 'comment',
      title: 'New Comment',
      user: 'George',
      desc: 'comment on task',
      link: 'Submit expense report',
      time: '3hr',
    },
    {
      icon: 'tasks',
      title: 'Task finished',
      user: 'Paula',
      desc: 'finished task',
      link: 'Submit expense report',
      time: '3hr',
    },
    {
      icon: 'comment',
      title: 'New Comment',
      user: 'George',
      desc: 'comment on task',
      link: 'Submit expense report',
      time: '3hr',
    },
  ];
  constructor() {}

  getLinks() {
    return this.links;
  }
  getLogs() {
    return this.logs;
  }
}
