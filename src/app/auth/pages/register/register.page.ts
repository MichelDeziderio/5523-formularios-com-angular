import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.page.html',
  styleUrl: './register.page.scss',
})
export class RegisterPage {
  error = '';

  form!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
   this.form =this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      privacy: [false, [Validators.requiredTrue]],
    });
  }

  submit() {
    this.error = '';
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    try {
      const { privacy, ...data } = this.form.getRawValue();
      this.auth.register(data);
      this.router.navigateByUrl('/anyinvest/perfil');
    } catch (e: any) {
      this.error = e?.message ?? 'Erro ao cadastrar';
    }
  }
}
