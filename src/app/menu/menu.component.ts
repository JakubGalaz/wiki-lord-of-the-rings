import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Postacie',
        items: [
          {
            label: 'Człowiek',
            command: () => this.toRoute('charactersList/Człowiek'),
          },
          { label: 'Elf', command: () => this.toRoute('charactersList/Elf') },
          {
            label: 'Krasnolud',
            command: () => this.toRoute('charactersList/Krasnolud'),
          },
          {
            label: 'Hobbit',
            command: () => this.toRoute('charactersList/Hobbit'),
          },
          { label: 'Ork', command: () => this.toRoute('charactersList/Ork') },
          {
            label: 'Inne',
            command: () => this.toRoute('charactersList/other'),
          },
        ],
      },
      {
        label: 'Lokacje',
        command: () => this.toRoute('locationsList'),
      },
      {
        label: 'Dodaj pozycję',
        items: [
          {
            label: 'Dodaj postać',
            command: () => this.toRoute('addCharacter'),
          },

          {
            label: 'Dodaj lokację',
            command: () => this.toRoute('addLocation'),
          },
        ],
      },
      {
        label: 'O nas',
        command: () => this.toRoute('websiteDescription'),
      },
    ];
  }

  toRoute(page: string): void {
    this.router.navigateByUrl(page);
  }
}
