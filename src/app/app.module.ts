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

//Set path to new components' routes
const appRoutes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective, //import directives
    ContarClicksDirective,
    DetalleComponent, //import components
    LugaresComponent,
    ContactoComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAdxVDrNzeEHwCahuVQQ7Jovhun60AvXBo'
    }),
    RouterModule.forRoot(appRoutes) //import RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent] // import framework css
})

export class AppModule { }
