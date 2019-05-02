import { Pipe, PipeTransform } from '@angular/core';
import { STATES } from '../constants/states.const';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: string): string {
    return STATES.find(it => it.code === value).name;
  }

}
