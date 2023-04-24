import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { SeleccionComponent } from './componentes/seleccion/seleccion.component';
import { SuaveComponent } from './componentes/tarjetas/suave/suave.component';
import { IntensoComponent } from './componentes/tarjetas/intenso/intenso.component';
import { ExtremoComponent } from './componentes/tarjetas/extremo/extremo.component';
import { RuletaComponent } from './componentes/ruleta/ruleta.component';
import { OtrosComponent } from './componentes/otros/otros.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
    path: 'ruleta',
    component: RuletaComponent
  },
  {
    path: 'otros',
    component: OtrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
