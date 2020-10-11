import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { delay } from 'rxjs/internal/operators/delay';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  topRated: any;
  loader = true;
  popular: any;
responsiveOptions;
  constructor(
    private movies: MoviesService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngOnInit() {
    this.trendingMovies(1);
  }

  trendingMovies(page: number) {
    this.movies.getPopular(page).pipe(delay(2000)).subscribe((res: any) => {
      this.popular = res.results;
      this.loader = false;
    });
  }
}
