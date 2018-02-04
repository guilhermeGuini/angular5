import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MatListModule, MatDialogModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DisciplinaRouting } from './disciplina.routing';
import { DisciplinaService } from '../services/disciplina.service';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ProfessorService } from '../services/professor.service';
import { ProfessorComponent } from './professor/professor.component';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { AuthInterceptorService } from '../auth.interceptor.service';
import { RequestErrorModule } from '../../request-error/request-error.module';

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
    MatDialogModule,
    RequestErrorModule
  ],
  providers: [
    FormBuilder,
    DisciplinaService, 
    ProfessorService,
    HttpClient, 
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  entryComponents: [ProfessorComponent, QRCodeComponent],
  declarations: [ConsultaComponent, FormularioComponent, ProfessorComponent, QRCodeComponent]  
})
export class DisciplinaModule { }
