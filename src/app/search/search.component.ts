import { LocationsService } from '.././article/services/locations.service';
import { Component, OnInit, IterableDiffers } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from '.././article/services/characters.service';
import { Information } from '.././article/interfaces/Information';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchText;
  display: boolean;
  informations: Information[];

  constructor(
    private locationsService: LocationsService,
    private characterService: CharactersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  clickOnInput(): void {
    this.informations = undefined;
    this.locationsService.documents.forEach((e) => {
      if (this.informations === undefined) {
        this.informations = [
          {
            id: e.id,
            name: e.name,
            typ: 'lokacjach',
          },
        ];
      }
      const item: Information = {
        id: e.id,
        name: e.name,
        typ: 'lokacjach',
      };
      this.informations.push(item);
    });
    console.log('ngoninit w search' + this.informations);

    this.characterService.documents.forEach((e) => {
      const item: Information = {
        id: e.id,
        name: e.name,
        typ: 'postaciach',
      };

      this.informations.push(item);
    });

    this.display = false;
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

    this.display = false;
  }
}
