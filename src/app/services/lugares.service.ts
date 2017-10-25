import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
// A marker metadata that marks a class as available to Injector for creation.
// Para que pueda ser inyectado en otros componentes y viceversa
@Injectable()

export class LugaresServices{
    lugares = null;
    API_ENDPOINT = "https://platzisquare-1e53e.firebaseio.com";

    // afDB:AngularFireDatabase => Refers to the the firebase DB module
    constructor(private afDB:AngularFireDatabase, private http: Http){}

    public getLugares() {
        // requesting to DB API the list of updated 'lugares'
        // return this.afDB.list('lugares/');
        return this.http.get(`${this.API_ENDPOINT}/lugares.json`);
    }

    public buscarLugar(lugar) {
        return this.getLugares()
        // .subscribe(lug => {
        //     this.lugares = lug;
        //     return (this.lugares.find(place => place.id == lugar.id));
        // })
    }

    public guardarLugar(lugar) {
        //console.log(lugar);
        // Saving data to '/lugares'
        //this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
        const headers = new Headers({"Content-type": "application/json"});
        return this.http.post(`${this.API_ENDPOINT}/lugares.json`, lugar, {headers:headers}).subscribe();
    }

    public obtenerGeoData(direccion) {
        // http://maps.google.com/maps/api/geocode/json?address=78-43+diagonal+70f,+Bogota,Colombia
        return this.http.get(`http://maps.google.com/maps/api/geocode/json?address=${direccion}`);
    }

    public getLugar(id) {
        return this.afDB.object(`lugares/${id}`);     
    }

    public editarLugar(lugar) {
        console.log(lugar);
        // Saving data to '/lugares'
        this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
    }
}