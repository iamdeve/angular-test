import { AdminService } from './../../../admin.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public jobs = [
    {
      title: 'Customers',
      completed: '19',
    },
    {
      title: 'Leads',
      completed: '32',
    },
    {
      title: 'Opportunities',
      completed: '29',
    },
    {
      title: 'Subscribers',
      completed: '20',
    },
  ];
  public options = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [60000, 115000, 115000, 90000, 90000, 115000, 111000],
        type: 'line',
      },
    ],
  };

  public lineChartData: ChartDataSets[] = [
    {
      data: [60000, 115000, 115000, 90000, 90000, 115000, 111000, 110000],
      // label: 'Series A',
    },
  ];
  public lineChartLabels: Label[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
  ];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#1b56ab',
      backgroundColor: '#1b56ab59',
    },
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  public accounts = [
    {
      icon: 'income.png',
      title: 'Income',
      value: '700542',
      step: '320',
      progress: '75%',
      color: 'blue',
    },
    {
      icon: 'expense.png',
      title: 'Expense',
      value: '400310',
      step: '221',
      progress: '55%',
      color: 'orange',
    },
    {
      icon: 'reserve.png',
      title: 'Reserve',
      value: '3000786',
      step: '196',
      progress: '65%',
      color: 'pink',
    },
  ];
  public logs: any = [];
  constructor(private admin: AdminService) {}

  ngOnInit(): void {
    this.logs = this.admin.getLogs();
  }
}
