import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardModule } from './components/dashboard/dashboard.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([], { useHash: true }),
    DashboardModule
  ],
  declarations: [
    AppComponent
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
