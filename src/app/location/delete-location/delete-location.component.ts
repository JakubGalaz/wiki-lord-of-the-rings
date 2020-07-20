import { LocationsService } from './../../locations.service';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../../interfaces/Location';
import { Character } from 'src/app/interfaces/Character';

@Component({
  selector: 'app-delete-location',
  templateUrl: './delete-location.component.html',
  styleUrls: ['./delete-location.component.css'],
})
export class DeleteLocationComponent implements OnInit {
  @Input() location: Location;

  card: boolean;
  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {}

  deleteLocation(): void {
    const index = this.locationsService.documents.indexOf(this.location);
    this.locationsService.documents.splice(index, 1);
  }

  showCard(): void {
    this.card = true;
  }

  hiddenCard(): void {
    this.card = false;
  }
}
