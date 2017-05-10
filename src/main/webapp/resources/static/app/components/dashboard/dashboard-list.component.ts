import { Component, OnInit }  from '@angular/core';

import { Dashboard } from './dashboard';
import { DashboardService } from './dashboard.service';

@Component({
    templateUrl: './dashboard-list.component.html'
})
export class DashboardListComponent implements OnInit {
    listFilter: string;
    errorMessage: string;

    dashboards: Dashboard[];

    constructor(private _dashboardService: DashboardService) {

    }

    ngOnInit(): void {
        this._dashboardService.getDashboards()
                .subscribe(dashboards => this.dashboards = dashboards,
                           error => this.errorMessage = <any>error);
    }
}
