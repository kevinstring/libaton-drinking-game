import { Component } from '@angular/core';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})
export class RuletaComponent {
 parpadeo="--parpadeo"
  rotacion='--rotacion:0deg'

  random:number=1000;
  random2:number=5;

  

  click(){
this.random=Math.floor(Math.random()*7200);
this.random2=Math.floor(Math.random()*5)
// this.rotacion=`--rotacion:7000deg`
this.rotacion=`--rotacion:${this.random}deg`
  }
}
