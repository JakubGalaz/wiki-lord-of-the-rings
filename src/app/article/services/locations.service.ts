import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Location } from '../interfaces/Location';
import { Observable, Subscription, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationsService implements OnDestroy {
  documents: Location[];
  sub: Subscription;

  constructor(private http: HttpClient) {
    console.log('konstruktor lokacji');
    this.sub = this.getJSON().subscribe(
      (data) => {
        this.documents = data;
      },
      (error) => console.log(error)
    );
  }

  public getJSON(): Observable<any> {
    return this.http.get('../../../assets/locations.json');
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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
