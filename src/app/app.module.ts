import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UppercaseConverterComponent } from './components/uppercase-converter/uppercase-converter.component';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UppercaseConverterService } from './services/uppercase-converter.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [UppercaseConverterService],
  bootstrap: [UppercaseConverterComponent],
})
export class AppModule {}
