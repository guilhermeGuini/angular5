import { NgModule } from '@angular/core';
import { PresencaComponent } from './presenca/presenca.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      RouterModule.forChild([
        {
            path: 'presenca',
            component: PresencaComponent
        } 
      ])
    ]
  })

export class RelatorioRouting { }