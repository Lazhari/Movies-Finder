import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { GenresComponent } from './genres/genres.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { SerieComponent } from './serie/serie.component';
import { ActorComponent } from './actor/actor.component';

export const appRoutes: Routes = [
    {path: '', component: MoviesComponent},
    {path: 'movie/:id', component: MovieComponent},
    {path: 'tv/:id', component: SerieComponent},
    {path: 'actor/:id', component: ActorComponent},
    {path: 'genres/:id/:name', component: GenresComponent},
    {path: 'upcoming', component: UpcomingComponent},
    {path: 'popular/series', component: PopularSeriesComponent},
];