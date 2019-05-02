import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { MatButtonModule } from '@angular/material/button';
import { FormModule } from '../form.module';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    NewRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    FormModule
  ]
})
export class NewModule { }
