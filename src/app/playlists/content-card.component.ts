import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content-card',
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  // inputs:[
  //   'title',   
  //   'text:content'
  // ],
  styles: [],

})

// ng g c playlists/ContentCard --flat -it -is

export class ContentCardComponent implements OnInit {

  @Input()
  title = '';
  
  // @Input('content')
  // text = ''
  constructor() { }

  ngOnInit() {
  }

}
