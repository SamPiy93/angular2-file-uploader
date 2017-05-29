import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 

import { AppComponent }  from './app.component';
import { FileComponent } from './file.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, FileComponent ],
  bootstrap:    [ AppComponent, FileComponent ]
})
export class AppModule { }
