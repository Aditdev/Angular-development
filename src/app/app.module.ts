import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UppercaseConverterComponent } from './components/uppercase-converter/uppercase-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
