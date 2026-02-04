import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DOMINIO_OPTIONS_PROFILE } from '../../utils/enums-profile.data';
import { StepperSidebarComponent } from '../../ui/stepper-sidebar/stepper-sidebar.component';
import { StepperTopbarComponent } from '../../ui/stepper-topbar/stepper-topbar.component';
import { FakeSelectRf } from '../../ui/fake-select-rf/fake-select-rf';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wizard',
  imports: [
    ReactiveFormsModule, 
    StepperSidebarComponent, 
    StepperTopbarComponent,
    FakeSelectRf,
    CommonModule
  ],
  templateUrl: './wizard.html',
})
export class Wizard {

  step = signal(0);
  dominios = DOMINIO_OPTIONS_PROFILE;

  steps = [
    'Sobre você',
    'Objetivo',
    'Horizonte e liquidez',
    'Experiência',
    'Tolerancia ao risco',
    'Capacidade financeira',
    'Preferências'
  ];

  fg!: FormGroup;


  constructor(
    private fb: FormBuilder
  ) {
    this.fg = this.fb.group({
      ageRange: [null, Validators.required],
      incomeRange: [null, Validators.required],
      investableWealth: [null, Validators.required],
    })
  }

  save() {
    console.log(this.fg.value);
  }

}
