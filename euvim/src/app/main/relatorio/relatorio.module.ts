import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresencaComponent } from './presenca/presenca.component';
import { RelatorioRouting } from './relatorio.routing';
import { RouterModule } from '@angular/router';
import { MatSelectModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatOptionModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatDialogModule, MatExpansionModule, MAT_DATE_LOCALE } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DisciplinaService } from '../services/disciplina.service';
import { RelatorioService } from './relatorio.service';
import { ItempresencaComponent } from './presenca/itempresenca/itempresenca.component';
import { AuthInterceptorService } from '../auth.interceptor.service';
import { RequestErrorModule } from '../../request-error/request-error.module';

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
    HttpClientModule,
    RequestErrorModule
  ],
  providers: [
    DisciplinaService,
    RelatorioService,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  declarations: [PresencaComponent, ItempresencaComponent]
})
export class RelatorioModule { }
