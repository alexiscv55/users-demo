import { Component, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { FormComponent } from '../form.component';

import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {

  @ViewChild(FormComponent) userForm: FormComponent;

  constructor(
    private readonly usersService: UsersService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router
  ) { }

  submit() {
   this.userForm.markAsTouched();
   if (this.userForm.form.valid) {
     this.usersService.createUser(this.userForm.form.value).subscribe(
       res => {
        this.snackBar.open(`Successfully created with id ${res.id}`, 'Ok', { duration: 10000, panelClass: 'success-snackbar' });
        this.router.navigate(['../../']);
       },
       err => {
        this.snackBar.open(`There's been an error`, 'Ok', { duration: 10000, panelClass: 'error-snackbar' });
       }
     );
   }
  }
}
