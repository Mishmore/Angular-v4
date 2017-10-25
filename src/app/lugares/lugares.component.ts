import { Component } from '@angular/core';
import { LugaresServices } from '../services/lugares.service';

@Component({
    selector: 'app-lugares', //set selector
    templateUrl: './lugares.component.html'
})

export class LugaresComponent {
    title = 'PlatziSquare';
    lat:number = 4.6560663;
    lng:number = -74.0595918;
    lugares = null;
    constructor(private lugaresService: LugaresServices){
        lugaresService.getLugares()
        // subscribe to promise of firebase DB
        .subscribe(lugares => {
            this.lugares = lugares.json();
            debugger;
            this.lugares = Object.keys(this.lugares).map(key => this.lugares[key]);
            debugger;
        })
    }
}