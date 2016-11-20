import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MoviesService {
  apikey: string;

  constructor(private _jsonp: Jsonp) {
    this.apikey = 'fed69657ba4cc6e1078d2a6a95f51c8c';
    console.log('Movies service is ready');
  }

  getPopular() {
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getInTheaters() {
    var search = new URLSearchParams();
    search.set('primary_release_date.gt', '2015-10-20');
    search.set('primary_release_date.lte', '2015-12-20');
    search.set('sort_by','popularity.desc');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getTopRatedMovies() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/top_rated?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  searchMovies(searchStr: string) {
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    search.set('query', searchStr);
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovie(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getGenres() {
    var search = new URLSearchParams();
    search.set('language', 'en-US');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getMoviesByGenre(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/genre/'+ id +'/movies?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovieReviews(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/reviews?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }
  getMovieVideos(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/videos?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getSimilarMovies(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/similar?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovieCredits(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/credits?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getUpComingMovies() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/upcoming?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }
  getPopularSeries() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/tv/popular?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getTopRatedSeries() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/tv/top_rated?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getSerieDetails(id:string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/tv/'+ id +'?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getSerieVideos(id:string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/tv/'+ id +'/videos?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getPersonDetail(id:string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/person/'+ id +'?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getPersonCast(id:string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/person/'+ id +'/movie_credits?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }
}
