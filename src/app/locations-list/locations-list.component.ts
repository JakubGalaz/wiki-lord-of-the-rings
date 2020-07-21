import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';

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
}
