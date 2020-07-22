import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CarouselModule,
    CdkScrollableModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    EditorModule,
    CardModule,
    FieldsetModule,
    DropdownModule,
  ],
  exports: [
    CommonModule,
    MenubarModule,
    CarouselModule,
    CdkScrollableModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    EditorModule,
    CardModule,
    FieldsetModule,
    DropdownModule,
  ],
})
export class SharedModule {}
