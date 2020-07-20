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

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {}

  deleteLocation(): void {
    console.log('deleteLocation()');
    const index = this.locationsService.documents.indexOf(this.location);
    console.log('index: ' + index);
    this.locationsService.documents.splice(index, 1);
  }
}
