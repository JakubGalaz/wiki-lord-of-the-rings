import { CharactersService } from './../../services/characters.service';
import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/interfaces/Character';

@Component({
  selector: 'app-character-delete',
  templateUrl: './character-delete.component.html',
  styleUrls: ['./character-delete.component.css'],
})
export class CharacterDeleteComponent implements OnInit {
  @Input() character: Character;
  card: boolean;

  constructor(private charctersServie: CharactersService) {}

  ngOnInit(): void {}

  deleteCharacter(): void {
    const index = this.charctersServie.documents.indexOf(this.character);
    this.charctersServie.documents.splice(index, 1);
  }

  showCard(): void {
    this.card = true;
  }

  hiddenCard(): void {
    this.card = false;
  }
}
