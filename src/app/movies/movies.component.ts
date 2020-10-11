import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { delay } from 'rxjs/internal/operators/delay';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  topRated: any;
  popular:any;
  loader = true;
  totalResults: any;
  totalResultsearch: any;
  // tslint:disable-next-line:variable-name
  total_results: any;
  searchRes: any;
  searchStr: string;

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.getTopRatedMovies(1),this.getPopular(1);
  }

  getTopRatedMovies(page: number) {
    this.movieService.getTopRatedMovies(page).pipe(delay(2000)).subscribe((res: any) => {
      this.topRated = res.results;
      this.totalResults = res.total_results;
      this.loader = false;
    },
      error => console.log(error));
  }
  getPopular(page: number) {
    this.movieService.getPopular(page).pipe(delay(2000)).subscribe((res: any) => {
      this.popular = res.results;
      this.totalResults = res.total_results;
      this.loader = false;
    },
      error => console.log(error));
  }

  changePage(event) {
    this.loader = true;
    this.getPopular(event.pageIndex + 1);
  }

  searchMovies() {
    this.movieService.searchMovies(this.searchStr).subscribe(res => {
      this.totalResultsearch = res.total_results;
      this.searchRes = res.results;
    });
  }
  changePagesearch(event) {
    this.loader = true;
    this.searchMovies();
  }

}
