import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';

import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';

const appRoutes: Routes = [
  { path:'list', component: ListComponent },
  { path:'detail/:id', component: DetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MovieCardComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
