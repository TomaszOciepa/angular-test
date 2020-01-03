import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'play-list-form',
  template: `
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Playlista</h5>
    <p class="card-text">Opis playlisty</p>
  </div>

    <div class="card-body">
      <div class="form-group">
        <label>Name:</label>
        <input type="text" [(ngModel)]="playlist.name" class="form-control">
      </div>
      <div class="form-group">
        <label>Tracks:</label>
        <input type="text" [ngModel]="playlist.tracks + ' utworów'" class="form-control" [disabled]="wartosc">
      </div>
      <div class="form-group">
        <label>Color:</label>
        <input type="color" [(ngModel)]="playlist.color" class="form-control">
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" [(ngModel)]="playlist.favourite">
          Favourite
      </label>
      </div>

      <div class="form-group">
        <button class="btn btn-success float-xs-right" (click)="save($event)">Zapisz</button>
      </div>
  </div>
</div>
  `,
  styles: []
})
export class PlayListFormComponent implements OnInit {

  @Input()
  playlist;

  @Input()
  wartosc;
  constructor() { }

  ngOnInit() {
  }

}
