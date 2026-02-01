import { Routes } from '@angular/router';
import { LoginPage } from './auth/pages/login/login.page';
import { RegisterPage } from './auth/pages/register/register.page';
import { ShellComponent } from './features/anyinvest/ui/shell/shell.component';
import { authGuard } from './core/guards/auth.guard';
import { Wizard } from './features/anyinvest/pages/wizard/wizard';

export const routes: Routes = [
  {
    path: '', component: ShellComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginPage },
      { path: 'cadastro', component: RegisterPage },
      {
        path: 'anyinvest',
        canActivate: [authGuard],
        children: [
          { path: '', redirectTo: 'descubra-seu-perfil', pathMatch: 'full' },
          { path: 'descubra-seu-perfil', component: Wizard }
        ]
      }
    ]
  },
  { path: '**', redirectTo: '' },
];
