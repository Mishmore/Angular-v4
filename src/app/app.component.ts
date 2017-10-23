import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzi Square';
  lugares:any = [
    {active: true, nombre: 'Polleria'},
    {active: false, nombre: 'Panaderia'},
    {active: true, nombre: 'Cevicheria'},  
    {active: true, nombre: 'Parrilleria'},    
  ];
  lat:number = 37.977503;
  lng:number = 23.7238216;


  constructor() {

  }

}
