import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { MainRouting } from './main.routing';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatSidenavModule, MatCardModule, MatListModule, MatToolbarModule, MatButtonModule} from '@angular/material';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [
    AuthGuard
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }