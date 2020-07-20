import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {
  @Input() myLocation: any;

  constructor() {}

  ngOnInit(): void {
    console.log('mylocation: ' + this.myLocation);
  }
}
