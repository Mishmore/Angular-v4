import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzi Square';
  lugares:any = [
    {nombre: 'Polleria'},
    {nombre: 'Panaderia'},
    {nombre: 'Cevicheria'},    
  ];

  constructor() {

  }

}
