import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { notes_service } from './notes.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,HttpModule
  ],
  providers: [notes_service],
  bootstrap: [AppComponent]
})
export class AppModule { }
