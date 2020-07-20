import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';

interface Location {
  id: string;
  section: string;
  name: string;
  creationDate: string;
  position: string;
  locationType: string;
  residents: string;
}

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css'],
})
export class LocationsListComponent implements OnInit {
  documents;

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.documents = [...this.locationsService.documents];
  }

  handleClick(e): void {
    console.log('pirzycisk: ' + e);
  }
}
