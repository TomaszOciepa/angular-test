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
    name: ""
  }

  getPlaylistStyle(playlist){
    return {
      // borderBottom: '2px solid transparent',
      borderBottomStyle: 'solid',
      borderBottomColor: playlist.color,
      borderBottomWidth: '4px'
    }
  }

  selected = null;

  size = 20
  wartosc = true

  save(event){
    console.log('Zapisano', event)
  }
  constructor(){

  }
}
