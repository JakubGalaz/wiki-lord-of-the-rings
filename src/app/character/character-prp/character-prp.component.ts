import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-prp',
  templateUrl: './character-prp.component.html',
  styleUrls: ['./character-prp.component.css'],
})
export class CharacterPrpComponent implements OnInit {
  @Input() myCharacter: any;

  constructor() {}

  ngOnInit(): void {}
}
