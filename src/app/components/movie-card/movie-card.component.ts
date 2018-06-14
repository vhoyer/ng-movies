import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  movie:Movie;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getData().then(d => console.log(this.movie = d));
  }

}
