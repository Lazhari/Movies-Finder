import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  serie: Object;
  video: Object;
  constructor(
    private _moviesServices: MoviesService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer
    ) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._moviesServices.getSerieDetails(id).subscribe(serie => {
        this.serie = serie;
      });
      this._moviesServices.getSerieVideos(id).subscribe(res => {
        if(res.results && res.results.length) {
          this.video = res.results[0];        
          this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
        }
      });
    })
  }

}
