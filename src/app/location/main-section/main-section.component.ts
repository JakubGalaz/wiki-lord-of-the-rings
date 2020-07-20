import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
})
export class MainSectionComponent implements OnInit {
  @Input() myName: string;
  @Output() newSection = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sectionUpdate(e: string): void {
    console.log('sekcja w main - section: ' + e);
    this.newSection.emit(e);
  }
}
