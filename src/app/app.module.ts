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
 
import { RuletaComponent } from './componentes/ruleta/ruleta.component';
import { OtrosComponent } from './componentes/otros/otros.component';
import { IonicModule } from '@ionic/angular';
import { IntroComponent } from './componentes/intro/intro.component';
import { AdivinaQuienComponent } from './componentes/adivina-quien/adivina-quien.component';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx/';
import { BastaComponent } from './componentes/basta/basta.component';
import { Gyroscope, GyroscopeOriginal } from '@ionic-native/gyroscope';
import { LibatonClassicComponent } from './componentes/libaton-classic/libaton-classic.component';
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
    IntroComponent,
    AdivinaQuienComponent,
    BastaComponent,
    LibatonClassicComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule, // Importar FormsModule para usar ngForm
    ReactiveFormsModule,
     IonicModule.forRoot({
      platform: {
        /** The default `desktop` function returns false for devices with a touchscreen.
        * This is not always wanted, so this function tests the User Agent instead.
        **/
        'desktop': (win) => {
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
          return !isMobile;
        }
      },
    }),
  ],
  providers: [HomeComponent,Vibration],
  bootstrap: [AppComponent]
})
export class AppModule { }
