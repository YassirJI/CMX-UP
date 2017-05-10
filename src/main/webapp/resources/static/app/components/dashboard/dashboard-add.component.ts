import { Component, OnInit }  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Dashboard } from './dashboard';
import { DashboardService } from './dashboard.service';

@Component({
    templateUrl: './dashboard-add.component.html'
})
export class AddDashboardComponent {
    errorMessage: string;

    
    constructor(private _router: Router, private _dashboardService: DashboardService) {

    }

    onsubmit(): void { 
        this._router.navigate(['/dashboards']);
    }

    onBack(): void {
        this._router.navigate(['/dashboards']);
    }
}
