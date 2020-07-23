import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CreationIDService {
  constructor() {}

  getID(): string {
    const myId = uuid.v4();
    return myId;
  }
}
