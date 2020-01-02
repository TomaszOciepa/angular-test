import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular is working!';

  getAge(){
    return (new Date).getFullYear() - this.person.birthdate
  }

  person = {
    name: "TOmek",
    birthdate: 1990,
    company:{
      name: "AppComp",
      city: "Gdańsk"
    }
  }

  counter = 0;


  constructor(){
    setInterval(()=>{
      this.counter ++
    }, 500)
  }
}
