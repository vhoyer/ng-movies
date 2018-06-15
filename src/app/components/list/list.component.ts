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

  movies:Movie[];

  constructor(private source:DataService) { }

  ngOnInit() {
  }

  onSearch(){
    this.source.getData().subscribe(data => {
      this.movies = [];
      this.movies[0] = data.json();
    });
    return false;
  }
}
