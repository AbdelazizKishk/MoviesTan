import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { MoviesService } from '../../core/services/movies/movies.service';
import { Subscription } from 'rxjs';
import { Imovies } from '../../shared/interfaces/imovies';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent implements OnInit {
  private readonly moviesService = inject(MoviesService);
  subMovies: Subscription = new Subscription();
  allMovies: WritableSignal<Imovies[]> = signal([]);
  pathImg: string = 'https://image.tmdb.org/t/p/w500/';
  ngOnInit(): void {
    this.getAllMovies();
  }
  getAllMovies(): void {
    this.subMovies = this.moviesService.getAllmovies().subscribe({
      next: (res) => {
        console.log(res.results);
        this.allMovies.set(res.results);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
