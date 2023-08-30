import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {
  name: string = '';
  dob: Date = new Date();
  gender: string = '';
  serviceType: string = '';
  comments: string = '';

  constructor() {}

  savePatient() {
    const newPatient = {
      name: this.name,
      dob: this.dob,
      gender: this.gender,
      serviceType: this.serviceType,
      comments: this.comments
    };

  }
}




