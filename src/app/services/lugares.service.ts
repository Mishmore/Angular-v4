import {Injectable} from '@angular/core';
// A marker metadata that marks a class as available to Injector for creation.
// Para que pueda ser inyectado en otros componentes y viceversa
@Injectable()

export class LugaresServices{
    lugares:any = [
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia', description: 'Pronto mas descripcion'},
        {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita', description: 'Pronto mas descripcion'},
        {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices', description: 'Pronto mas descripcion'},
        {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre:'Sushi Suhiroll', description: 'Pronto mas descripcion'},
        {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia', description: 'Pronto mas descripcion'},
        {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo', description: 'Pronto mas descripcion'}
    ];

    public getLugares() {
        return this.lugares;
    }

    public buscarLugar(id) {
        return this.lugares.filter(lugar => lugar.id == id)[0] || null;
    }
}