import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  documents: Character[] = [
    {
      id: '1',
      name: 'Bilbio Baggins',
      section:
        'Lorem ipsum dolor sit amet, <p> consectetur  </p> adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.',
      creationDate: new Date('2012-11-01'),
      race: 'Hobbit',
      names: 'Pan Bilbio',
      weapon: 'Żądło',
      image: 'https://live.staticflickr.com/8094/8566657317_17395cdc4a_b.jpg',
    },
    {
      id: '2',
      name: 'Aragorn',
      section:
        'Lorem ipsum dolor sit amet, <p> consectetur  </p> adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.',
      creationDate: new Date('2012-11-01'),
      race: 'Człowiek',
      names: 'Telconatar',
      weapon: 'Miecz Andúril',
      image: 'https://live.staticflickr.com/8094/8566657317_17395cdc4a_b.jpg',
    },
    {
      id: '3',
      name: 'sam gamgee',
      section:
        'Lorem ipsum dolor sit amet, <p> consectetur  </p> adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.',
      creationDate: new Date('2012-11-01'),
      race: 'Hobbit',
      names: 'Samuaice',
      weapon: 'Miecz z Kurhanów',
      image: 'https://live.staticflickr.com/8094/8566657317_17395cdc4a_b.jpg',
    },
  ];

  constructor() {}

  postCharacter(character: Character): void {
    this.documents.push(character);
  }

  putCharacter(character: Character, section: string): void {
    const index = this.documents.indexOf(character);
    character.section = section;
    this.documents[index] = character;
  }

  deleteCharacter(character: Character): void {
    const index = this.documents.indexOf(character);
    this.documents.splice(index, 1);
  }
}
