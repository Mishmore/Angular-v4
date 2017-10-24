import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzi Square';
  lugares:any = [
    {plan:'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Polleria'},
    {plan:'gratuito', cercania: 1, distancia: 1.5, active: false, nombre: 'Panaderia'},
    {plan:'pagado', cercania: 2, distancia: 30, active: true, nombre: 'Cevicheria'},  
    {plan:'pagado', cercania: 3, distancia: 120, active: true, nombre: 'Parrilleria'},    
  ];
  lat:number = 37.977503;
  lng:number = 23.7238216;


  constructor() {

  }

}
