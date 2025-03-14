import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { CharactersService } from '../../core/services/characters/characters.service';
import { Icharacter } from '../../shared/interfaces/icharacter';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-characters',
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit, OnDestroy {
  private readonly charactersService = inject(CharactersService);
  allCharacters: WritableSignal<Icharacter[]> = signal([]);
  subCharacters: Subscription = new Subscription();

  ngOnInit(): void {
    this.getAllCharacters();
  }
  getAllCharacters(): void {
    this.subCharacters = this.charactersService.getCharacters().subscribe({
      next: (res) => {
        console.log(res);
        this.allCharacters.set(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnDestroy(): void {
    this.subCharacters.unsubscribe();
  }
}
