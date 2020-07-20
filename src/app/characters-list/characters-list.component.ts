import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharactersService } from '../characters.service';
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
      const seletedCharacters = [
        ...this.charactersService.documents.filter(
          (e) => e.race === params.type
        ),
      ];
      this.documents = [...seletedCharacters];
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
