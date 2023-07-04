import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import {ScreenOrientationOriginal,ScreenOrientation} from '@ionic-native/screen-orientation'
import { interval } from 'rxjs';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})
export class RuletaComponent implements OnInit {
 parpadeo="--parpadeo"
  rotacion='--rotacion:0deg'
  numeroRandom=0;
  random:number=1000;
  random2:number=0;
  mostrar=false;
  mostrarMenu=false;
  imagenes:string[]=["assets/botella1.png","assets/botella2.png","assets/botella3.png","assets/botella4.png","assets/botella5.png","assets/botella6.png","assets/botella7.png"]
  imagen:string="assets/botella1.png"
  retos:string[]=["Dale un beso en la espalda al jugador del culo de la botella","Tóma la mano de la persona de tu izquierda","Brindarás con la persona del culo de la botella por 4 tragos","Elige entre servir la comida o las bebidas","Dale un beso en la mejilla a la persona a tu derecha","Dale un pico rápido a la persona del culo de la botella","Muestra como mueves la cintura","Bebe 3 tragos"];
ngOnInit(): void {

}
  
  mostrarReto(){
    this.mostrar=true
    if(this.mostrar){
    this.numeroRandom = Math.floor(Math.random()*this.retos.length);

  }

  }

  elegir(evento:any){
    console.log(evento.src)
    this.imagen=evento
    this.mostrarMenu=false;
  }

  click(){
    this.mostrar=false;
    this.random=Math.floor(Math.random()*720)*30;

 
    console.log(this.random)


// this.rotacion=`--rotacion:7000deg`
this.rotacion=`--rotacion:${this.random}deg`

    setTimeout(()=>this.mostrarReto(),2000);

  }
}
