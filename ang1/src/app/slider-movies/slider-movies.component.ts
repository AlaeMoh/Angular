import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IMovies } from '../service/types/movies.types';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider-movies',
  templateUrl: './slider-movies.component.html',
  styleUrls: ['./slider-movies.component.scss']
})
export class SliderMoviesComponent implements OnChanges{
  @Input () sliderMovies: IMovies[]=[];
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
}


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
