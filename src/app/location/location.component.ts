import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationsService } from '../locations.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  locationsList;
  myLocation;
  myName: string;

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

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
