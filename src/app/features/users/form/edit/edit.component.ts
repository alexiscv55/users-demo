import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { FormComponent } from '../form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  protected user: User;

  @ViewChild(FormComponent) userForm: FormComponent;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly usersService: UsersService,
    private readonly snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.usersService.getUserById(Number(params.get('id'))))
    ).subscribe(
      res => this.user = res,
      err => this.router.navigate(['../../../'])
    );
  }

  submit() {
    this.userForm.markAsTouched();
    if (this.userForm.form.valid) {
      this.usersService.createUser(this.userForm.form.value).subscribe(
        res => {
         this.snackBar.open(`Successfully updated`, 'Ok', { duration: 10000, panelClass: 'success-snackbar' });
         this.router.navigate(['../../../']);
        },
        err => this.snackBar.open(`There's been an error`, 'Ok', { duration: 10000, panelClass: 'error-snackbar' })
      );
    }
   }

}
