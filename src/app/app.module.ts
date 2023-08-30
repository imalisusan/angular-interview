import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientTableComponent } from './patient-table/patient-table.component';
import { CustomDatePipe } from './custom-date.pipe';
import { HighlightRowsDirective } from './highlight-rows.directive';
import { PatientListComponent } from './patient-list/patient-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientFormComponent,
    PatientTableComponent,
    CustomDatePipe,
    HighlightRowsDirective,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
