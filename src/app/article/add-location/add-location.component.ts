import { CreationIDService } from './../../identity/creation-id.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Location } from '../interfaces/Location';
import { LocationsService } from '../services/locations.service';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css'],
})
export class AddLocationComponent implements OnInit {
  locationForm: FormGroup;
  buttonDisabled: boolean;
  locations: SelectItem[];

  constructor(
    private fb: FormBuilder,
    private locationServie: LocationsService,
    private router: Router,
    private creationIDService: CreationIDService
  ) {}

  ngOnInit(): void {
    this.buttonDisabled = true;
    this.locationForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ąćśńółężźĄŚĆŃŁĘŻŹ]*'),
        ],
      ],
      position: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ąćśńółężźĄŚĆŃŁĘŻŹ]*'),
        ],
      ],
      residents: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ąćśńółężźĄŚĆŃŁĘŻŹ]*'),
        ],
      ],
      locationType: ['Miasto', [Validators.required]],
      image: ['', [Validators.required, Validators.minLength(4)]],
      section: ['opis', Validators.required],
    });

    this.locations = [
      { label: 'Miasto', value: 'Miasto' },
      { label: 'Wieś', value: 'Wieś' },
      { label: 'Kraina', value: 'Kraina' },
      { label: 'Twierza', value: 'Twierdza' },
      { label: 'Warownia', value: 'Warownia' },
      { label: 'Zamek', value: 'Zamek' },
      { label: 'Pałac', value: 'Pałac' },
      { label: 'Wieża', value: 'Wieża' },
    ];
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
    this.locationServie.postLocation(location);
    this.router.navigateByUrl('/locationsList');
  }

  createLocation(): Location {
    const today: Date = new Date();

    const generateID = this.creationIDService.getID();

    const location = {
      id: generateID,
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
    this.buttonDisabled = true;
    this.locationForm.value.section = e;
    if (e.length > 15 && this.locationForm.status === 'VALID') {
      this.buttonDisabled = false;
    }
  }
}
