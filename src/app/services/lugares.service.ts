import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';
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

    // afDB:AngularFireDatabase => Refers to the the firebase DB module
    constructor(private afDB:AngularFireDatabase, private http: Http){}

    public getLugares() {
        // requesting to DB API the list of updated 'lugares'
        return this.afDB.list('lugares/');
    }

    public buscarLugar(id) {
        return this.lugares.filter(lugar => lugar.id == id)[0] || null;
    }

    public guardarLugar(lugar) {
        console.log(lugar);
        // Saving data to '/lugares'
        this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
    }

    public obtenerGeoData(direccion) {
        // http://maps.google.com/maps/api/geocode/json?address=78-43+diagonal+70f,+Bogota,Colombia
        return this.http.get(`http://maps.google.com/maps/api/geocode/json?address=${direccion}`);
    }
}