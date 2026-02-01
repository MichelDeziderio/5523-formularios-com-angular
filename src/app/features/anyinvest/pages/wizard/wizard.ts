import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DOMINIO_OPTIONS_PROFILE } from '../../utils/enums-profile.data';
import { StepperSidebarComponent } from '../../ui/stepper-sidebar/stepper-sidebar.component';
import { StepperTopbarComponent } from '../../ui/stepper-topbar/stepper-topbar.component';
import { FakeSelectRf } from '../../ui/fake-select-rf/fake-select-rf';

@Component({
  selector: 'app-wizard',
  imports: [
    ReactiveFormsModule, 
    StepperSidebarComponent, 
    StepperTopbarComponent,
    FakeSelectRf
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

  fg = new FormGroup({
    ageRange: new FormControl(null),
    incomeRange: new FormControl(null),
    investableWealth: new FormControl(null),
  });

  get ageRangeControl() {
    return this.fg.get('ageRange') as FormControl;
  }

  get incomeRangeControl() {
    return this.fg.get('incomeRange') as FormControl;
  }

  get investableWealthControl() {
    return this.fg.get('investableWealth') as FormControl;
  }

  save() {
    console.log(this.fg.value);
  }

}
