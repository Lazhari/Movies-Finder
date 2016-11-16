import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularList: Array<Object>;
  theatersList: Array<Object>;
  constructor(private _moviesService: MoviesService) {
    this._moviesService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
    this._moviesService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });
  }

  ngOnInit() {
  }

}
