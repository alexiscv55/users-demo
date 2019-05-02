import { NgModule } from '@angular/core';
import { StatePipe } from './state.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ StatePipe ],
  imports: [ CommonModule ],
  exports: [ StatePipe ]
})

export class PipesModule { }
