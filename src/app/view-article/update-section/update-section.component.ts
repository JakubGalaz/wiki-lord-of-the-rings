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
  disabledButton: boolean;
  constructor() {
    this.disabledButton = true;
  }

  ngOnInit(): void {}

  showEditor(): void {
    this.display = !this.display;
  }

  update(): void {
    this.newSection.emit(this.section);
  }

  displayButton(): void {
    this.disabledButton = true;

    if (this.section.length > 8) {
      console.log('wyswietlanie buttona');
      this.disabledButton = false;
    }
  }
}
