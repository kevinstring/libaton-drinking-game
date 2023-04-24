import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { SeleccionComponent } from './componentes/seleccion/seleccion.component';
import { SuaveComponent } from './componentes/tarjetas/suave/suave.component';
import { IntensoComponent } from './componentes/tarjetas/intenso/intenso.component';
import { ExtremoComponent } from './componentes/tarjetas/extremo/extremo.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { Location } from '@angular/common';
import { RuletaComponent } from './componentes/ruleta/ruleta.component';
import { OtrosComponent } from './componentes/otros/otros.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeleccionComponent,
    SuaveComponent,


    IntensoComponent,
    ExtremoComponent,
    RuletaComponent,
    OtrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule, // Importar FormsModule para usar ngForm
    ReactiveFormsModule,
  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
