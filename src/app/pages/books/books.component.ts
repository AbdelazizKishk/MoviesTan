import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { BooksService } from '../../core/services/books/books.service';
import { Ibooks } from '../../shared/interfaces/ibooks';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent implements OnInit, OnDestroy {
  private readonly booksService = inject(BooksService);
  allBooks: WritableSignal<Ibooks[]> = signal([]);
  subBooks: Subscription = new Subscription();
  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks(): void {
    this.subBooks = this.booksService.getBooks().subscribe({
      next: (res) => {
        console.log(res);
        this.allBooks.set(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnDestroy(): void {
    this.subBooks.unsubscribe();
  }
}
