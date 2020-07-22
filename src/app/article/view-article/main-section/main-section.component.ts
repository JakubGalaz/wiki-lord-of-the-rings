import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
})
export class MainSectionComponent {
  @Input() myName: string;
  @Output() newSection = new EventEmitter<string>();

  constructor() {}

  sectionUpdate(e: string): void {
    this.newSection.emit(e);
  }
}
