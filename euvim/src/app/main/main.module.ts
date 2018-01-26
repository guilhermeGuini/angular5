import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { MainRouting } from './main.routing';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatSidenavModule, MatCardModule, MatListModule, MatToolbarModule, MatButtonModule, MatTableModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule} from '@angular/material';
import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { FormularioComponent } from './usuario/formulario/formulario.component';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { UsuarioService } from './usuario/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  declarations: [
    MainComponent, 
    ConsultaComponent, 
    FormularioComponent
  ],
  providers: [FormBuilder, UsuarioService]
})
export class MainModule { }