import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
