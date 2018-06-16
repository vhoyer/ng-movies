import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  query:string = '';

  constructor(
    private router:Router
  ) {}

  onSearch(){
    this.router.navigate(['/list'], { queryParams: { 'q': this.query } })
  }
}
