import { AddCharacterComponent } from './add-character/add-character.component';
import { CharacterComponent } from './character/character.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationComponent } from './location/location.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { CharactersListComponent } from './characters-list/characters-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'locationsList', component: LocationsListComponent },
  { path: 'location/:id', component: LocationComponent },
  { path: 'addLocation', component: AddLocationComponent },
  { path: 'charactersList/:type', component: CharactersListComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'addCharacter', component: AddCharacterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
