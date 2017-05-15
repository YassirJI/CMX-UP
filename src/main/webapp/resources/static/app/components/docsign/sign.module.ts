import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { SharedModule} from "../shared/shared.module";

import { PrepareSignComponent } from './prepare-sign.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'prepare', component: PrepareSignComponent }
    ])
  ],
  declarations: [
    PrepareSignComponent
  ]
})
export class SignModule {}
