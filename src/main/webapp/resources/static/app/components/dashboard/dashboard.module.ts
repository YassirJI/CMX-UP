import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { PopoverModule} from "ngx-popover";
import { SharedModule} from "../shared/shared.module";

import { DashboardComponent } from './dashboard.component';
import { DashboardListComponent } from './dashboard-list.component';
import { AddDashboardComponent } from './dashboard-add.component';
import { AddDashletComponent } from './dashlet-add.component';

import { DashboardFilterPipe } from '../../services/dashboard/dashboard-filter.pipe';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { DashletService } from '../../services/dashboard/dashlet.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    AngularDualListBoxModule,
    PopoverModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboards', component: DashboardListComponent },
      { path: 'add-dashboard', component: AddDashboardComponent },
      { path: 'add-dashlet', component: AddDashletComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ])
  ],
  declarations: [
    DashboardComponent, 
    DashboardListComponent,  
    AddDashboardComponent,
    AddDashletComponent,  
    DashboardFilterPipe
  ],
  providers: [
    DashboardService,
    DashletService
  ]
})
export class DashboardModule {}
