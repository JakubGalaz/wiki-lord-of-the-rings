import { LocationsService } from './../locations.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-section',
  templateUrl: './update-section.component.html',
  styleUrls: ['./update-section.component.css'],
})
export class UpdateSectionComponent implements OnInit {
  @Input() section: string;
  @Output() newSection = new EventEmitter<string>();
  display: boolean;
  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    console.log('sekcja ktora przyszla do update secion: ' + this.section);
  }

  showEditor(): void {
    this.display = !this.display;
  }

  update(): void {
    console.log('new serction z update section: ' + this.section);
    this.newSection.emit(this.section);
  }
}
