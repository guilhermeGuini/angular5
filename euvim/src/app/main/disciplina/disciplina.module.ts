import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MatListModule, MatDialogModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DisciplinaRouting } from './disciplina.routing';
import { DisciplinaService } from './disciplina.service';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ProfessorService } from './professor.service';
import { ProfessorComponent } from './professor/professor.component';
import { QrcodeComponent } from './qrcode/qrcode.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DisciplinaRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [
    FormBuilder,
    DisciplinaService, 
    ProfessorService,
    HttpClient, 
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  entryComponents: [ProfessorComponent, QrcodeComponent],
  declarations: [ConsultaComponent, FormularioComponent, ProfessorComponent, QrcodeComponent]  
})
export class DisciplinaModule { }
