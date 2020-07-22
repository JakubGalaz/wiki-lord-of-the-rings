import { Router } from '@angular/router';
import { CharactersService } from './../services/characters.service';
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
  buttonDisabled: boolean;
  constructor(
    private fb: FormBuilder,
    private charactersService: CharactersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buttonDisabled = true;

    this.characterForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Ząćśńółę ]*'),
        ],
      ],
      section: ['opis', [Validators.required, Validators.minLength(4)]],
      race: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ąćśńółę]*'),
        ],
      ],
      names: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
          Validators.pattern('[a-zA-Z ąćśńółę]*'),
        ],
      ],
      weapon: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ąćśńółę]*'),
        ],
      ],
      image: ['', [Validators.required, Validators.minLength(10)]],
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
    const character = this.createCharacter();
    this.charactersService.documents.push(character);
    this.router.navigateByUrl('/home');
  }

  createCharacter(): Character {
    const today: Date = new Date();
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
    this.buttonDisabled = true;
    this.characterForm.value.section = e;
    if (e.length > 15 && this.characterForm.status === 'VALID') {
      this.buttonDisabled = false;
    }
  }
}
