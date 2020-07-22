import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  text: string;
  @Output() newSection = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.text = 'opis';
  }

  emit(): void {
    this.newSection.emit(this.text);
  }
}
