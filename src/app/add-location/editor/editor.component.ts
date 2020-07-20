import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  text: string;
  @Output() newSection = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  emit(): void {
    this.newSection.emit(this.text);
  }
}
