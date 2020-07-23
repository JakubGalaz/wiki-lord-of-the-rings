import { CharactersService } from './services/characters.service';
import { IdentityModule } from './../identity/identity.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsService } from './services/locations.service';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { HomeComponent } from './home/home.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterComponent } from './character/character.component';
import { CharacterPrpComponent } from './character/character-prp/character-prp.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { DeleteLocationComponent } from './location/delete-location/delete-location.component';
import { CharacterDeleteComponent } from './character/character-delete/character-delete.component';
import { EditorComponent } from './add-location/editor/editor.component';
import { LocationComponent } from './location/location.component';
import { PropertiesComponent } from './location/properties/properties.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { MainSectionComponent } from './view-article/main-section/main-section.component';
import { PhotoComponent } from './view-article/photo/photo.component';
import { UpdateSectionComponent } from './view-article/update-section/update-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePlPipe } from './date-pl.pipe';

@NgModule({
  declarations: [
    LocationsListComponent,
    HomeComponent,
    CharactersListComponent,
    CharacterComponent,
    CharacterPrpComponent,
    AddCharacterComponent,
    DeleteLocationComponent,
    CharacterDeleteComponent,
    EditorComponent,
    LocationComponent,
    PropertiesComponent,
    AddLocationComponent,
    MainSectionComponent,
    PhotoComponent,
    UpdateSectionComponent,
    DatePlPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IdentityModule,
  ],
  exports: [
    LocationsListComponent,
    HomeComponent,
    CharactersListComponent,
    CharacterComponent,
    CharacterPrpComponent,
    AddCharacterComponent,
    DeleteLocationComponent,
    CharacterDeleteComponent,
    EditorComponent,
    LocationComponent,
    PropertiesComponent,
    AddLocationComponent,
    MainSectionComponent,
    PhotoComponent,
    UpdateSectionComponent,
  ],
  providers: [LocationsService, CharactersService],
})
export class ArticleModule {}
