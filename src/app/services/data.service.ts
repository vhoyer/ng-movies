import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from '../interfaces/movie';
import { TMDbConfig } from '../interfaces/tmdb-config';

@Injectable({
  providedIn: 'root'
})
export class DataService implements TMDbConfig {
  images: { base_url: string; secure_base_url: string; backdrop_sizes: string[]; logo_sizes: string[]; poster_sizes: string[]; profile_sizes: string[]; still_sizes: string[]; };
  change_keys: string[];
  apiKey:string = '00000000000000000000000000000000';

  constructor(public http:Http) {
    let raw = this.http.get(`https://api.themoviedb.org/3/configuration?api_key=${this.apiKey}`).toPromise();
    raw.then(data => {
      let json = data.json();
      this.images = json.images;
      this.change_keys = json.change_keys;
    });
  }

  getData(){
    let raw = this.http.get(`https://api.themoviedb.org/3/movie/76341?api_key=${this.apiKey}&language=pt-BR`).toPromise()
    return raw.then(data => data.json() as Movie);
  }
}