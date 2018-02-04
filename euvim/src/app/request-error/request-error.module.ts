import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestErrorComponent } from './request-error.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestErrorInterceptorService } from './request-error.interceptor.service';
import { MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestErrorInterceptorService,
      multi: true
    }
  ],
  declarations: [RequestErrorComponent]
})
export class RequestErrorModule { }
