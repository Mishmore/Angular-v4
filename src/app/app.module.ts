import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { ContarClicksDirective } from './directives/contar-clicks.directive'; //import directives
import { ResaltarDirective } from './directives/resaltar.directive';

import { Routes, RouterModule } from '@angular/router'; // import Router to use new components
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contact/contacto.component';
import { LugaresServices } from './services/lugares.service';
import { CrearComponent } from './crear/crear.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HttpModule } from '@angular/http';

//Set path to new components' routes
const appRoutes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'crear/:id', component: CrearComponent }  
  
];

export const firebaseConfig = {
  apiKey: "AIzaSyB9TyJl1f0Bypd6TA4VtH6T99wxIlMDNus",
  authDomain: "platzisquare-1e53e.firebaseapp.com",
  databaseURL: "https://platzisquare-1e53e.firebaseio.com",
  storageBucket: "platzisquare-1e53e.appspot.com",
  messagingSenderId: "466990525956"
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective, //import directives
    ContarClicksDirective,
    DetalleComponent, //import components
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAdxVDrNzeEHwCahuVQQ7Jovhun60AvXBo'
    }),
    RouterModule.forRoot(appRoutes), //import RouterModule
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [LugaresServices],
  bootstrap: [AppComponent] // import framework css
})




export class AppModule { }
