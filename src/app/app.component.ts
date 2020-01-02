import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular is working!';

  playlist = {
    name: "The best List",
    tracks: 24,
    color: "#FF0000",
    favourite: true,
  }

  wartosc = true

  save(event){
    console.log('Zapisano', event)
  }
  constructor(){

  }
}
