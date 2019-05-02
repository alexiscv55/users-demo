import { Component, TemplateRef } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  protected users$ = this.usersService.getUsers();

  private dialogRef: MatDialogRef<any, any>;

  constructor(
    private readonly usersService: UsersService,
    private readonly dialog: MatDialog,
    private readonly snackBar: MatSnackBar
  ) { }

  openConfirmDialog(template: TemplateRef<any>, user: User) {
    this.dialogRef = this.dialog.open(template, {data: {user}});
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe(
      res => {
        this.dialogRef.close();
        this.snackBar.open(`Successfully deleted`, 'Ok', { duration: 10000, panelClass: 'success-snackbar' });
        this.users$ = this.usersService.getUsers();
      },
      err => this.snackBar.open(`There's been an error`, 'Ok', { duration: 10000, panelClass: 'error-snackbar' })
    );
  }
}
