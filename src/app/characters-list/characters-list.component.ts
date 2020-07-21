import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Character } from '../interfaces/Character';
import { race, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit, OnDestroy {
  documents: Character[];
  private routeSub: Subscription;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      if (params.type !== 'other') {
        const seletedCharacters = [
          ...this.charactersService.documents.filter(
            (e) => e.race === params.type
          ),
        ];

        this.documents = [...seletedCharacters];
      } else {
        const seletedCharacters = [
          ...this.charactersService.documents.filter(
            (e) =>
              e.race !== 'Ork' &&
              e.race !== 'Człowiek' &&
              e.race !== 'Elf' &&
              e.race !== 'Krasnolud' &&
              e.race !== 'Hobbit'
          ),
        ];

        this.documents = [...seletedCharacters];
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
