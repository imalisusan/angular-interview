import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent {
  @Input() patients!: any[];
}
