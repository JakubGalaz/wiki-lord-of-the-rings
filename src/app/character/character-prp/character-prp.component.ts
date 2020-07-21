import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-prp',
  templateUrl: './character-prp.component.html',
  styleUrls: ['./character-prp.component.css'],
})
export class CharacterPrpComponent {
  @Input() myCharacter: any;

  constructor() {}
}
