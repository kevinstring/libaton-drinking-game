import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { SeleccionComponent } from './componentes/seleccion/seleccion.component';
import { SuaveComponent } from './componentes/tarjetas/suave/suave.component';
import { IntensoComponent } from './componentes/tarjetas/intenso/intenso.component';
import { ExtremoComponent } from './componentes/tarjetas/extremo/extremo.component';
import { RuletaComponent } from './componentes/ruleta/ruleta.component';
import { OtrosComponent } from './componentes/otros/otros.component';
import { IntroComponent } from './componentes/intro/intro.component';
import { AdivinaQuienComponent } from './componentes/adivina-quien/adivina-quien.component';
import { LibatonClassicComponent } from './componentes/libaton-classic/libaton-classic.component';
import { BastaComponent } from './componentes/basta/basta.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },
  {
    path: 'home',
    
    
    component: HomeComponent
  },
  {
    path: 'seleccion',
   
    component: SeleccionComponent
   
  },{
        path: 'intenso',
        component: IntensoComponent
      },
      {
        path: 'extremo',
        component: ExtremoComponent
      },
    

  {
    path: 'suave',
    component: SuaveComponent
  },
  {
    path: 'basta',
    component: BastaComponent
  },
  {
    path: 'ruleta',
    component: RuletaComponent
  },
  {
    path: 'otros',
    component: OtrosComponent
  },
  {
    path: 'adivina',
    component: AdivinaQuienComponent
  },
  {
    path: 'libaton',
    component: LibatonClassicComponent
  },
  {path:'bienvenida',
component:IntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
