import { LocationsService } from './../../services/locations.service';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../../interfaces/Location';

@Component({
  selector: 'app-delete-location',
  templateUrl: './delete-location.component.html',
  styleUrls: ['./delete-location.component.css'],
})
export class DeleteLocationComponent {
  @Input() location: Location;

  card: boolean;
  constructor(private locationsService: LocationsService) {}

  deleteLocation(): void {
    this.locationsService.deleteLocation(this.location);
  }

  showCard(): void {
    this.card = true;
  }

  hiddenCard(): void {
    this.card = false;
  }
}
