import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SzamologepComponent } from './components/szamologep/szamologep.component';


@NgModule({
  declarations: [
    AppComponent,
    SzamologepComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
