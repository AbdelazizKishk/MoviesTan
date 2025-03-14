import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Home',
  },
  {
    path: 'books',
    loadComponent: () =>
      import('./pages/books/books.component').then((m) => m.BooksComponent),
    title: 'Books',
  },
  {
    path: 'movies',
    loadComponent: () =>
      import('./pages/movies/movies.component').then((m) => m.MoviesComponent),
    title: 'Movies',
  },
  {
    path: 'characters',
    loadComponent: () =>
      import('./pages/characters/characters.component').then(
        (m) => m.CharactersComponent
      ),
    title: 'Characters',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/notfound/notfound.component').then(
        (m) => m.NotfoundComponent
      ),
    title: 'Error',
  },
];
