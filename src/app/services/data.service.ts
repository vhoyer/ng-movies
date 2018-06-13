import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey:string = '00000000000000000000000000000000';

  constructor(public http:Http) { }

  getData(){
    let raw = this.http.get(`https://api.themoviedb.org/3/movie/76341?api_key=${this.apiKey}`).toPromise()
    return raw.then(data => {
      console.log(data.json());
      return (data.json() as Movie);
    });
  }
}