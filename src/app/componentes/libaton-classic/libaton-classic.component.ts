import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {ScreenOrientationOriginal,ScreenOrientation} from '@ionic-native/screen-orientation'

@Component({
  selector: 'app-libaton-classic',
  templateUrl: './libaton-classic.component.html',
  styleUrls: ['./libaton-classic.component.scss'],
})
export class LibatonClassicComponent  implements OnInit {
  modoPagado=true;

  abrirDivPagosI=false;
  abrirDivPagosC=false;
  constructor(private router:Router) {
  
  }
   
  ngOnInit() {
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT)

  }
  salir(){
    this.router.navigate(['/home'],{replaceUrl:true})
  }
  suave(){
    this.router.navigate(['suave'],{replaceUrl:true});
  }
  intenso(){
    this.router.navigate(['intenso'],{replaceUrl:true});
  }
  extremo(){
    this.router.navigate(['extremo'],{replaceUrl:true});
  }
  divPagosI(){
    this.abrirDivPagosI=true;
  console.log(this.abrirDivPagosI)
  }
  
  divPagosC(){
    this.abrirDivPagosC=true;

  }
  realizarPago(){
    console.log("realizandoPago");
    this.modoPagado=true;
  }
}
