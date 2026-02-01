import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {
  error = '';

  form!: FormGroup;

  

  constructor(
    private fb: FormBuilder, 
    private auth: AuthService, 
    private router: Router
  ) {
    this.form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }

  submit() {
    this.error = '';
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    try {
      this.auth.login(this.form.getRawValue());
      this.router.navigateByUrl('/anyinvest/perfil');
    } catch (e: any) {
      this.error = e?.message ?? 'Erro ao entrar';
    }
  }
}
