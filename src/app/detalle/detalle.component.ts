import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent {
    lugares:any = [
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia', description: 'Pronto mas descripcion'},
        {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita', description: 'Pronto mas descripcion'},
        {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices', description: 'Pronto mas descripcion'},
        {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre:'Sushi Suhiroll', description: 'Pronto mas descripcion'},
        {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia', description: 'Pronto mas descripcion'},
        {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo', description: 'Pronto mas descripcion'}
    ];
    id = null;
    lugar:any = {};

    // Activated route to match the route clicked
    // Contains the information about a route associated with a component loaded in an outlet at a particular moment in time.
    // ActivatedRouteSnapshot can also be used to traverse the router state tree.

    constructor(private route: ActivatedRoute) {
        console.log(this.route.snapshot.params['id']);
        console.log(this.route.queryParams);
        // Show the clicked id
        this.id = this.route.snapshot.params['id'];
        console.log(this.buscarLugar())
        this.lugar = this.buscarLugar();
        console.log('click');
    }

    // Show place with the id clicked
    buscarLugar() {
        return this.lugares.filter(lugar => lugar.id == this.id)[0] || null;
    }
 
}