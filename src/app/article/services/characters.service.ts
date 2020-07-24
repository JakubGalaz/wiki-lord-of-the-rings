import { Injectable, OnDestroy } from '@angular/core';
import { Character } from '../interfaces/Character';
import { Observable, Subscription, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CharactersService implements OnDestroy {
  documents: Character[];
  sub: Subscription;

  constructor(private http: HttpClient) {
    this.sub = this.getJSON().subscribe(
      (data) => {
        this.documents = data;
      },
      (error) => console.log(error())
    );
  }

  public getJSON(): Observable<any> {
    return this.http
      .get('../../../assets/characters.json')
      .pipe(retry(2), catchError(this.handleError));
  }

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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
