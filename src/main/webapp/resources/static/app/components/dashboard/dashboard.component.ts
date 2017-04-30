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
    errorMessage: string;

    dashboards: Dashboard[];
    selectedDashlets: Dashlet[];
    selectedDashboard:Dashboard;
    
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
