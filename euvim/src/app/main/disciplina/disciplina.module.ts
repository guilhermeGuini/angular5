import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MatListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DisciplinaRouting } from './disciplina.routing';
import { DisciplinaService } from './disciplina.service';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ProfessorService } from './professor.service';

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
    MatListModule
  ],
  providers: [
    FormBuilder,
    DisciplinaService, 
    ProfessorService,
    HttpClient, 
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  declarations: [ConsultaComponent, FormularioComponent]  
})
export class DisciplinaModule { }
