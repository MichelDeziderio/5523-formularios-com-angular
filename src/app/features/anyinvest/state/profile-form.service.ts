import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ProfileFormService {
  form!: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
    ageRange: ['', Validators.required],
    incomeRange: ['', Validators.required],
    investableWealth: ['', Validators.required],
    goal: ['', Validators.required],
    horizon: ['', Validators.required],
    liquidityNeed: ['', Validators.required],
    experienceLevel: ['', Validators.required],
    drop10: ['', Validators.required],
    drop30: ['', Validators.required],
    hasEmergencyFund: ['', Validators.required],
    hasDebts: ['', Validators.required],
    preference: ['', Validators.required],
  });
  }
}
