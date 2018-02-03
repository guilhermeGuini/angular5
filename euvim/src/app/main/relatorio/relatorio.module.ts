import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresencaComponent } from './presenca/presenca.component';
import { RelatorioRouting } from './relatorio.routing';
import { RouterModule } from '@angular/router';
import { MatSelectModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatOptionModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatDialogModule, MatExpansionModule, MAT_DATE_LOCALE } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DisciplinaService } from '../services/disciplina.service';
import { RelatorioService } from './relatorio.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RelatorioRouting,
    CommonModule,
    RouterModule,
    RelatorioRouting,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatSelectModule, 
    MatOptionModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [
    DisciplinaService,
    RelatorioService,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  declarations: [PresencaComponent]
})
export class RelatorioModule { }
