import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlists = [
    {
      name: 'The best List',
      tracks: 28,
      color: '#0000FF',
      favourite: false,
    } ,
    {
      name: 'Moje ulubione',
      tracks: 24,
      color: '#FF0000',
      favourite: true,
    },
  ] 

  edited = {

  }



  mode = "none"

  selected = null;

  size = 20
  wartosc = true

  select(playlist){
    if(playlist != this.selected)
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


  constructor() { }

  ngOnInit() {
  }

}
