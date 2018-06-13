import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data:Movie;

  constructor(private source:DataService) {
    this.data = {
      adult: false,
      backdrop_path: '',
      belongs_to_collection: null,
      budget: null,
      genres: null,
      homepage: null,
      id: null,
      imdb_id: null,
      original_language: null,
      original_title: null,
      overview: null,
      popularity: null,
      poster_path: null,
      production_companies: null,
      production_countries: null,
      release_date: null,
      revenue: null,
      runtime: null,
      spoken_languages: null,
      status: null,
      tagline: null,
      title: null,
      video: null,
      vote_average: null,
      vote_count: null
    };
  }

  ngOnInit() {
    this.source.getData().then(data => this.data = data);
  }

}
