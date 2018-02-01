import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule, MatIconModule } from '@angular/material';
import { UsuarioRouting } from './usuario.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsuarioService } from './usuario.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UsuarioRouting,
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
    FlexLayoutModule
  ],
  declarations: [ConsultaComponent, FormularioComponent],
  providers: [FormBuilder, UsuarioService, HttpClient]
})

export class UsuarioModule { }
