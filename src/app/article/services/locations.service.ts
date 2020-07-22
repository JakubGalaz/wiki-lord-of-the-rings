import { Injectable } from '@angular/core';
import { Location } from '../interfaces/Location';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  documents: Location[];

  constructor() {
    this.documents = [
      {
        id: '1',
        name: 'Shire',
        section: 'asdas',
        creationDate: new Date('2012-11-01'),
        position: 'Śródziemie',
        locationType: 'Kraj',
        residents: 'Hobbici',
        image:
          'https://live.staticflickr.com/4361/36116043994_c17390114a_b.jpg',
      },
      {
        id: '2',
        name: 'Mordor',
        section:
          'Lorem ipsum dolor sit amet, <p> consectetur  </p> adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.',
        creationDate: new Date('2012-11-01'),
        position: 'Śródziemie',
        locationType: 'Kraina',
        residents: 'Orki',
        image:
          'https://live.staticflickr.com/4361/36116043994_c17390114a_b.jpg',
      },
      {
        id: '3',
        name: 'Rivendel',
        section: 'asdas',
        creationDate: new Date('2012-11-01'),
        position: 'Śródziemie',
        locationType: 'Miasto',
        residents: 'Elfy',
        image:
          'https://live.staticflickr.com/4361/36116043994_c17390114a_b.jpg',
      },
      {
        id: '4',
        name: 'Minas Tirith',
        section: 'asdas',
        creationDate: new Date('2012-11-01'),
        position: 'Śródziemie',
        locationType: 'Miastio',
        residents: 'Ludzie',
        image:
          'https://live.staticflickr.com/4361/36116043994_c17390114a_b.jpg',
      },
      {
        id: '5',
        name: 'Shire',
        section: 'asdas',
        creationDate: new Date('2012-11-01'),
        position: 'Śródziemie',
        locationType: 'Kraj',
        residents: 'Hobbici',
        image:
          'https://live.staticflickr.com/4361/36116043994_c17390114a_b.jpg',
      },
      {
        id: '6',
        name: 'Mordor',
        section: 'asdas',
        creationDate: new Date('2012-11-01'),
        position: 'Śródziemie',
        locationType: 'Kraina',
        residents: 'Orki',
        image:
          'https://live.staticflickr.com/4361/36116043994_c17390114a_b.jpg',
      },
      {
        id: '7',
        name: 'Rivendel',
        section: 'asdas',
        creationDate: new Date('2012-11-01'),
        position: 'Śródziemie',
        locationType: 'Miasto',
        residents: 'Elfy',
        image:
          'https://live.staticflickr.com/4361/36116043994_c17390114a_b.jpg',
      },
      {
        id: '8',
        name: 'Minas Tirith',
        section: 'asdas',
        creationDate: new Date('2012-11-01'),
        position: 'Śródziemie',
        locationType: 'Miastio',
        residents: 'Ludzie',
        image:
          'https://live.staticflickr.com/4361/36116043994_c17390114a_b.jpg',
      },
      {
        id: '9',
        name: 'Shire',
        section: 'asdas',
        creationDate: new Date('2012-11-01'),
        position: 'Śródziemie',
        locationType: 'Kraj',
        residents: 'Hobbici',
        image:
          'https://live.staticflickr.com/4361/36116043994_c17390114a_b.jpg',
      },
      {
        id: '10',
        name: 'Mordor',
        section: 'asdas',
        creationDate: new Date('2012-11-01'),
        position: 'Śródziemie',
        locationType: 'Kraina',
        residents: 'Orki',
        image:
          'https://live.staticflickr.com/4361/36116043994_c17390114a_b.jpg',
      },
      {
        id: '11',
        name: 'Rivendel',
        section: 'asdas',
        creationDate: new Date('2012-11-01'),
        position: 'Śródziemie',
        locationType: 'Miasto',
        residents: 'Elfy',
        image:
          'https://live.staticflickr.com/4361/36116043994_c17390114a_b.jpg',
      },
      {
        id: '12',
        name: 'Minas Tirith',
        section: 'asdas',
        creationDate: new Date('2012-11-01'),
        position: 'Śródziemie',
        locationType: 'Miastio',
        residents: 'Ludzie',
        image:
          'https://live.staticflickr.com/4361/36116043994_c17390114a_b.jpg',
      },
    ];
  }

  postLocation(location: Location): void {
    this.documents.push(location);
  }

  putLocation(location: Location, section: string): void {
    const index = this.documents.indexOf(location);
    location.section = section;
    this.documents[index] = location;
  }

  deleteLocation(location: Location): void {
    const index = this.documents.indexOf(location);
    this.documents.splice(index, 1);
  }
}
