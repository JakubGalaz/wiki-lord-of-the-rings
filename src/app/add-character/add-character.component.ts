import { CharactersService } from './../characters.service';
import { race } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Character } from '../interfaces/Character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent implements OnInit {
  characterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private charactersService: CharactersService
  ) {}

  ngOnInit(): void {
    this.characterForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      section: ['', [Validators.required, Validators.minLength(4)]],
      race: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      names: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      weapon: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      image: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  get name(): AbstractControl {
    return this.characterForm.get('name');
  }
  get section(): AbstractControl {
    return this.characterForm.get('section');
  }
  get race(): AbstractControl {
    return this.characterForm.get('race');
  }
  get names(): AbstractControl {
    return this.characterForm.get('names');
  }
  get weapon(): AbstractControl {
    return this.characterForm.get('weapon');
  }
  get image(): AbstractControl {
    return this.characterForm.get('image');
  }

  addCharacter(): void {
    console.log('addCharacter');
    const character = this.createCharacter();
    this.charactersService.documents.push(character);
  }

  createCharacter(): Character {
    const today: string = '' + Date.now();
    const character = {
      id: '22',
      name: this.characterForm.value.name,
      section: this.characterForm.value.section,
      creationDate: today,
      race: this.characterForm.value.race,
      names: this.characterForm.value.names,
      weapon: this.characterForm.value.weapon,
      image: this.characterForm.value.image,
    };

    return character;
  }

  sectionUpdate(e: string): void {
    this.characterForm.value.section = e;
  }
}
