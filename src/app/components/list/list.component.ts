import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Movie } from '../../interfaces/movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  query:string = '';

  movies:Movie[];

  constructor(private source:DataService) { }

  ngOnInit() {
  }

  onSearch(){
    this.source.getSearchResult(this.query).subscribe(data => {
      this.movies = data.json().results;
    });
  }
}
