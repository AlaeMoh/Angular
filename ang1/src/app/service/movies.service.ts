import { IresponseMovies } from './types/movies.types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient) {}

  getMovies(): Observable<IresponseMovies>{
    return this._http.get<IresponseMovies>(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=026eec66ea946709845406cd3224a5bd'
    )
  };
}
