import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlists-list',
  template: `
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nazwa</th>
      <th scope="col">Utworów</th>
      <th scope="col">Ulubiona</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let playlist of playlists; let i = index"
    [ngClass]="{'table-active': selected == playlist, 'border-class': true}" 
    (click)="select(playlist)"
     [ngStyle]="getPlaylistStyle(playlist)">
      <th scope="row">{{ i +1 }}.</th>
      <td> {{ playlist.name }}</td>
      <td> {{ playlist.tracks }}</td>
      <td>
        <label>
          <input type="checkbox" [(ngModel)]="playlist.favourite" (click)="$event.stopPropagation();">
          Ulubiona
      </label>
      </td>
    </tr>
  </tbody>
</table>
  `,
  styles: []
})
export class PlaylistsListComponent implements OnInit {

  @Output('selected')
  onSelected = new EventEmitter()

  @Input()
  playlists;
  
  @Input()
  selected;

  select(playlist){
    this.onSelected.emit(playlist)
  }
  
  getPlaylistStyle(playlist){
    return {
      // borderBottom: '2px solid transparent',
      borderBottomStyle: 'solid',
      borderBottomColor: playlist.color,
      borderBottomWidth: '4px'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
