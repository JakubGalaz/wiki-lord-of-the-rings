import { CharactersService } from './../../services/characters.service';
import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/Character';

@Component({
  selector: 'app-character-delete',
  templateUrl: './character-delete.component.html',
  styleUrls: ['./character-delete.component.css'],
})
export class CharacterDeleteComponent {
  @Input() character: Character;
  card: boolean;

  constructor(private charctersServie: CharactersService) {}

  deleteCharacter(): void {
    this.charctersServie.deleteCharacter(this.character);
  }

  showCard(): void {
    this.card = true;
  }

  hiddenCard(): void {
    this.card = false;
  }
}
