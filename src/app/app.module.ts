import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PlaylistsComponent } from './playlists/playlists.component';
import { ContentCardComponent } from './playlists/content-card.component';
import { PlayListFormComponent } from './playlists/play-list-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    ContentCardComponent,
    PlayListFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
