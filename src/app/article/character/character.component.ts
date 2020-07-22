import { Character } from './../interfaces/Character';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from './../services/characters.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  private charactersList: Character[];
  myCharacter: Character;
  characterName: string;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.charactersList = [...this.charactersService.documents];
    this.routeSub = this.route.params.subscribe((params) => {
      this.getCharacterByID(params.id);
    });
  }

  getCharacterByID(id: string): void {
    this.myCharacter = this.charactersList.find((a) => a.id === id);
    this.characterName = this.myCharacter.name;
  }

  editSection(e: string): void {
    this.charactersService.putCharacter(this.myCharacter, e);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
