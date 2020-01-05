import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlists = [
    {
      id: 1,
      name: 'The best List',
      tracks: 28,
      color: '#0000FF',
      favourite: false,
    } ,
    {
      id: 2,
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
  

  select(playlist){
    if(playlist != this.selected)
    this.mode = "selected"
    this.selected = playlist
  }

  createNew(){
    this.mode = "edit"
    var newPlaylist ={
      name: '',
      tracks: 0,
      color: '#0000FF',
      favourite: false,
    }
    this.selected = newPlaylist;
    this.edited = Object.assign({}, newPlaylist);
  }

  edit(playlist){
    this.mode = "edit"
    this.edited = Object.assign({}, playlist)
    this.selected = playlist
  }

  save(playlist){
    if(playlist.id){
      let index = this.playlists.findIndex((old_playlist)=>(
        old_playlist.id === playlist.id
      ))
      this.playlists.splice(index,1,playlist)
    }else{
      playlist.id = Date.now()
      this.playlists.push(playlist);
    }
    
  }


  constructor() { }

  ngOnInit() {
  }

}
