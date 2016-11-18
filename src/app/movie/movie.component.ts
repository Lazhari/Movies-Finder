import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Object;
  reviews: Array<Object>;
  constructor(
    private _moviesServices: MoviesService,
    private router: ActivatedRoute ) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._moviesServices.getMovie(id).subscribe(movie => {
        this.movie = movie;
      });
      this._moviesServices.getMovieReviews(id).subscribe(res => {
        this.reviews = res.results;
      });
    })
  }

}
