import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzi Square';
  a = 3;
  b = 5;
  ready = false;
  name = '';
  lastname = '';

  constructor() {
    setTimeout(() => {
      this.ready = true;
    }, 1000)
  }

  doSth() {
    alert('Hola');
  }
}
