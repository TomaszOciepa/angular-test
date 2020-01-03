import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'content-card',
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Playlista</h5>
        <p class="card-text">Wybierz playliste</p>
      </div>
    </div>
  `,
  styles: [`h5{
    color: red;
  }`],
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.Native
  encapsulation: ViewEncapsulation.Emulated
})

// ng g c playlists/ContentCard --flat -it -is

export class ContentCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
