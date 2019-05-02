import { STATES } from '../constants/states.const';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressHelper {
  public static getCountryFromState(value: string): string {
    return STATES.find(it => it.code === value).country;
  }
}
