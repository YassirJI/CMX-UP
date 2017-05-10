import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { PopoverModule} from "ngx-popover";

import { DashboardComponent } from './dashboard.component';
import { DashboardListComponent } from './dashboard-list.component';
import { AddDashboardComponent } from './dashboard-add.component';
import { AddDashletComponent } from './dashlet-add.component';
import { RdWidgetComponent } from '../rd-widget/widget.component';
import { RdWidgetBodyComponent } from '../rd-widget-body/widget-body.component';
import { RdWidgetHeaderComponent } from '../rd-widget-header/widget-header.component';
import { RdWidgetFooterComponent } from '../rd-widget-footer/widget-footer.component';
import { DashboardFilterPipe } from './dashboard-filter.pipe';
import { DashboardService } from './dashboard.service';
import { DashletService } from './dashlet.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    AngularDualListBoxModule,
    PopoverModule,
    RouterModule.forChild([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboards', component: DashboardListComponent },
      { path: 'add-dashboard', component: AddDashboardComponent },
      { path: 'add-dashlet', component: AddDashletComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ])
  ],
  declarations: [
    DashboardComponent, 
    DashboardListComponent,  
    AddDashboardComponent,
    AddDashletComponent,  
    DashboardFilterPipe, 
    RdWidgetComponent, 
    RdWidgetBodyComponent, 
    RdWidgetFooterComponent, 
    RdWidgetHeaderComponent
  ],
  providers: [
    DashboardService,
    DashletService
  ]
})
export class DashboardModule {}
