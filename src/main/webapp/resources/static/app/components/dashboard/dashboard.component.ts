import { Component, OnInit } from '@angular/core';
import { dragula, DragulaService } from 'ng2-dragula/ng2-dragula';

import { Dashboard } from './dashboard.js';
import { DashboardService } from './dashboard.service.js';


import { Dashlet } from './dashlet.js';
import { DashletService } from './dashlet.service.js';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard/dashboard.component.html',
    viewProviders: [DragulaService]
})
export class DashboardComponent implements OnInit {
    public columnCounter : number = 0;
    errorMessage: string;

    dashboards: Dashboard[];
    selectedDashlets: Dashlet[];
    selectedDashboard:Dashboard;

    public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData:number[] = [350, 450, 100];
    public doughnutChartType:string = 'doughnut';
     
    public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
    public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
    
    public barChartData:any[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];
    
    constructor(private _dashboardService: DashboardService, private _dashletService: DashletService, private dragulaService: DragulaService) {
        dragulaService.drag.subscribe((value: any) => {
        this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe((value: any) => {
        this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe((value: any) => {
        this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe((value: any) => {
        this.onOut(value.slice(1));
        });
    }

    ngOnInit(): void {
        this._dashboardService.getDashboards()
                .subscribe(dashboards => this.dashboards = dashboards,
                           error => this.errorMessage = <any>error);
               
        this.findDashlets(1);
        
    }

    onChangeDashboard(dashboard:Dashboard) {
        this.selectedDashboard = dashboard;
        this.findDashlets(dashboard.id);
  }

  findDashlets(dashboardId:number): void {
    this._dashletService.getDashlets(dashboardId)
                    .subscribe(dashlets => this.selectedDashlets = dashlets,
                            error => this.errorMessage = <any>error);
 }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args: any) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args: any) {
    let [e, el] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args: any) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args: any) {
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
  }
}
