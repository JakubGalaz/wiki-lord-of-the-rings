import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationsService } from '../services/locations.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '../interfaces/Location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  locationsList;
  myLocation: Location;
  myName: string;
  editedSection: string;

  constructor(
    private loacationsService: LocationsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.locationsList = [...this.loacationsService.documents];
    this.routeSub = this.route.params.subscribe((params) => {
      this.getLocationByID(params.id);
    });
  }

  getLocationByID(id: string): void {
    this.myLocation = this.locationsList.find((a) => a.id === id);
    this.myName = this.myLocation.name;
  }

  editSection(e: string): void {
    this.loacationsService.putLocation(this.myLocation, e);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
