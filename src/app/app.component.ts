import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular is working!';

  playlist = {
    name: "The best Listt",
    tracks: 24,
    color: "#FF0000",
    favourite: true,
  } 

  edited = {

  }

  getPlaylistStyle(playlist){
    return {
      // borderBottom: '2px solid transparent',
      borderBottomStyle: 'solid',
      borderBottomColor: playlist.color,
      borderBottomWidth: '4px'
    }
  }

  mode = "none"

  selected = null;

  size = 20
  wartosc = true

  select(playlist){
    this.mode = "selected"
    this.selected = playlist
  }

  createNew(){
    this.mode = "edit"
    var newPlaylist ={}
    this.selected = newPlaylist;
    this.edited = newPlaylist;
  }

  edit(playlist){
    this.mode = "edit"
    this.edited = playlist
    this.selected = playlist
  }

  save(event){
    console.log('Zapisano', event)
  }
  constructor(){

  }
}
