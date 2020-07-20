import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Location } from '../interfaces/Location';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css'],
})
export class AddLocationComponent implements OnInit {
  locationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private locationServie: LocationsService
  ) {}

  ngOnInit(): void {
    this.locationForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      position: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      residents: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      locationType: [
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
    return this.locationForm.get('name');
  }
  get section(): AbstractControl {
    return this.locationForm.get('section');
  }
  get position(): AbstractControl {
    return this.locationForm.get('position');
  }
  get residents(): AbstractControl {
    return this.locationForm.get('residents');
  }
  get locationType(): AbstractControl {
    return this.locationForm.get('locationType');
  }
  get image(): AbstractControl {
    return this.locationForm.get('image');
  }

  addLocation(): void {
    const location = this.createLocation();
    this.locationServie.documents.push(location);
  }

  createLocation(): Location {
    const today: string = '' + Date.now();

    const location = {
      id: '21',
      name: this.locationForm.value.name,
      section: this.locationForm.value.section,
      creationDate: today,
      position: this.locationForm.value.position,
      locationType: this.locationForm.value.locationType,
      residents: this.locationForm.value.residents,
      image: this.locationForm.value.image,
    };

    return location;
  }

  sectionUpdate(e: string): void {
    this.locationForm.value.section = e;
  }
}
