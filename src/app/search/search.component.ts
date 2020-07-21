import { LocationsService } from './../services/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  documents;

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.documents = [...this.locationsService.documents];
    console.log('documents: ' + this.documents);
  }

  search(e) {}
}
