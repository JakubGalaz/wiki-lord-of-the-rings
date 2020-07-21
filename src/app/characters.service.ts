import { Article } from './interfaces/Article';
import { Injectable } from '@angular/core';
import { Character } from './interfaces/Character';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  articlee: Article[] = [
    {
      id: '1',
      section: 'Jakas informacja',
      creationData: '12/11/2010',
      gruopId: '1',
      type: '1',
    },
  ];

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
}
