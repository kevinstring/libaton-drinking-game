import { Component, OnInit } from '@angular/core';
import { IonRefresher } from '@ionic/angular';
import {ScreenOrientationOriginal,ScreenOrientation} from '@ionic-native/screen-orientation'
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
  
import { Subscription, count, interval, take } from 'rxjs';
import { PicoloService } from 'src/app/picolo.service';
import { Adivina } from 'src/app/retos';

@Component({
  selector: 'app-adivina-quien',
  templateUrl: './adivina-quien.component.html',
  styleUrls: ['./adivina-quien.component.scss'],
})
export class AdivinaQuienComponent  implements OnInit {
entra=false;
inicio=true;
 subscripcion: Subscription

 numbers = interval(1000);
contador = 0;
tragos:number[]=[3,4,5,6,7]
finalizado=false;
terminar=false
ganastes=false;
otroContador=0;
options:GyroscopeOptions = {
  frequency:3000
}
aleatorioTragos:number=0;
   takeFourNumbers = this.numbers.pipe(take(11));
  adivina:Adivina[]=[]
item:string="";
aleatorio:number=0;
  constructor(private servicio:PicoloService,private vibration: Vibration) {
    Gyroscope.getCurrent(this.options).then((orientation:GyroscopeOrientation)=>{
      console.log(orientation.x + orientation.y + orientation.z);
    }).catch()
    Gyroscope.watch()
    .subscribe((orientation: GyroscopeOrientation) => {
      alert(orientation.x + orientation.y + orientation.z + orientation.timestamp)
    }); 
  }

  ngOnInit() {
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.LANDSCAPE);

  this.servicio.getAdivina("adivina").subscribe(a=>{this.adivina=a;
})

  }

  ngOnDestroy(): void {
    if(this.subscripcion)
   this.subscripcion.unsubscribe()
  }

  entrar(){
    
    this.ganastes=false
    this.terminar=false
    this.otroContador++
    console.log(this.otroContador)
    this.contador=11;
    this.aleatorio=Math.floor(Math.random()*this.item.length)
    this.item=this.adivina[this.aleatorio].item.toUpperCase();
    this.inicio=false;
    this.aleatorioTragos=Math.floor(Math.random()*this.tragos.length)

this.entra=true;
console.log(this.tragos)
if(this.entra=true){
  this.finalizado=false;
 
    
 
   
    
  

this.subscripcion=this.takeFourNumbers.subscribe(x =>{console.log( this.contador-=1);
  if(this.contador<=11 && this.contador>=10){
   
    for(let i=0; i<=2;i++){

      this.vibration.vibrate(1000);
      console.log('vibrando')
      i++
     }


}
    if(this.contador==0){  
      console.log("eAquitoy")
      this.entra=false;
      this.finalizado=true;
      this.contador=10;
      this.inicio=true;
    }
    if(this.contador<=5 && this.contador>=1){
   
      for(let i=2; i<=5;i++){

        this.vibration.vibrate(100);
        console.log('vibrando')
        i++
       }


  }
 
  }
    );

    console.log(this.contador)



}
  }

  finaliza(){
    this.subscripcion.unsubscribe()

      this.inicio=true;
      this.finalizado=false
     this.terminar=true
     this.ganastes=false;

  }
  finalize(){
    this.subscripcion.unsubscribe()

      this.inicio=true;
      this.finalizado=false
     this.terminar=true
     this.ganastes=false;

  }

  ganaste(){ 
    for(let i=0; i<=12;i++){

      this.vibration.vibrate(300);
      console.log('vibrando')
      i++
     }    this.ganastes=true;
    this.finalizado=true
          this.subscripcion.unsubscribe()
 
      this.entra=false;

      this.inicio=true;
    
  }

  terminarCount(){
    this.entra=false
    this.terminar=true
    
  //  this.contador=10;
   console.log(this.entra)
  }



}
