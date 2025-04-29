import { HttpClient } from '@angular/common/http';
import { IMovies } from './../service/types/movies.types';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{
 listOfMovies: IMovies[]=[];

 constructor(private _movieService:MoviesService){

 }
 ngOnInit(): void {
   this._movieService.getMovies().subscribe(
    (res)=>{
      this.listOfMovies= res.results
    }
   )
 }
}
