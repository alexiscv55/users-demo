import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';
import { FormModule } from '../form.module';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    FormModule
  ]
})
export class EditModule { }
