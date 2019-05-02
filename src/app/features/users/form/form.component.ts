import { Component, OnInit } from '@angular/core';
import { STATES } from 'src/app/shared/constants/states.const';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddressHelper } from 'src/app/shared/helpers/address-helper';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  protected states = STATES;

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      birthDate: new FormControl(null, [Validators.required]),
      address: new FormGroup({
        street: new FormControl(null, [Validators.required]),
        state: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        country: new FormControl(null, [Validators.required]),
        zip: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{5}$|^[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]$/g)])
      })
    });

    this.form.get(['address', 'state']).valueChanges.subscribe(value => {
      this.form.get(['address', 'country']).setValue(AddressHelper.getCountryFromState(value));
    });
  }

  public markAsTouched() {
    this.form.get('name').markAsTouched();
    this.form.get('email').markAsTouched();
    this.form.get('birthDate').markAsTouched();
    this.form.get(['address', 'street']).markAsTouched();
    this.form.get(['address', 'state']).markAsTouched();
    this.form.get(['address', 'city']).markAsTouched();
    this.form.get(['address', 'country']).markAsTouched();
    this.form.get(['address', 'zip']).markAsTouched();
  }
}
