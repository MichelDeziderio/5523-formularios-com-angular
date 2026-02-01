import { Routes } from '@angular/router';
import { LoginPage } from './auth/pages/login/login.page';
import { RegisterPage } from './auth/pages/register/register.page';
import { ShellComponent } from './features/anyinvest/ui/shell/shell.component';

export const routes: Routes = [
  {path: '', component: ShellComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginPage},
      {path: 'cadastro',  component: RegisterPage},
    ]
  },
  {path: '**', redirectTo: ''},
];
