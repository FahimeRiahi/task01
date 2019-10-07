import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountNumberFormattingComponent } from './account-number-formatting/account-number-formatting.component';
import {SampleServiceService} from './services/sample-service.service';
@NgModule({
  declarations: [
    AppComponent,
    AccountNumberFormattingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SampleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
