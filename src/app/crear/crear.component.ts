import { Component } from '@angular/core';
import { LugaresServices } from '../services/lugares.service';
 
@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})
export class CrearComponent {
    lugar:any = {};

    // use service created
    constructor(private lugaresService: LugaresServices) {

    }
    guardarLugar() {
        this.lugar.id = Date.now();
        this.lugaresService.guardarLugar(this.lugar);
        alert('Negocio guardado con exito');
        this.lugar = {};
    }
}