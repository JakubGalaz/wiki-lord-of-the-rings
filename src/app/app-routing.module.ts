import { WebsiteDescComponent } from './website-desc/website-desc.component';
import { AddCharacterComponent } from './article/add-character/add-character.component';
import { CharacterComponent } from './article/character/character.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './article/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LocationsListComponent } from './article/locations-list/locations-list.component';
import { LocationComponent } from './article/location/location.component';
import { AddLocationComponent } from './article/add-location/add-location.component';
import { CharactersListComponent } from './article/characters-list/characters-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'locationsList', component: LocationsListComponent },
  { path: 'location/:id', component: LocationComponent },
  { path: 'addLocation', component: AddLocationComponent },
  { path: 'charactersList/:type', component: CharactersListComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'addCharacter', component: AddCharacterComponent },
  { path: 'websiteDescription', component: WebsiteDescComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
