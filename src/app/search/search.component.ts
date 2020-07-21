import { LocationsService } from './../services/locations.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '../interfaces/Location';
import { Router } from '@angular/router';
import { CharactersService } from '../services/characters.service';

interface Information {
  id: string;
  name: string;
  typ: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchText;
  display: boolean;
  documents: Location[];
  informations: Information[];

  constructor(
    private locationsService: LocationsService,
    private characterService: CharactersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.informations = [
      {
        id: '1',
        name: 'xd',
        typ: 'ss',
      },
    ];

    this.locationsService.documents.forEach((e) => {
      const item: Information = {
        id: e.id,
        name: e.name,
        typ: 'lokacjach',
      };
      this.informations.push(item);
    });

    this.characterService.documents.forEach((e) => {
      const item: Information = {
        id: e.id,
        name: e.name,
        typ: 'postaciach',
      };

      this.informations.push(item);
    });

    this.display = false;
    this.documents = [...this.locationsService.documents];
  }

  search(): void {
    this.display = true;
    if (this.searchText === '') {
      this.display = false;
    }
  }

  routeTo(e: Information): void {
    if (e.typ === 'lokacjach') {
      this.router.navigateByUrl('location/' + e.id);
    } else {
      this.router.navigateByUrl('character/' + e.id);
    }
  }
}
