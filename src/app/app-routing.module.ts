import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'users', loadChildren: './features/users/users.module#UsersModule' },
  { path: '', redirectTo: '/users', pathMatch: 'full'
  },
  { path: '**', redirectTo: '/users' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules
      }
      )
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
