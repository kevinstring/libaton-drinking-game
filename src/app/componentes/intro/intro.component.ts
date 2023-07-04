import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent  implements OnInit {
  intro=false;

  constructor(private router: Router) {    this.intro=true; }

  ngOnInit() {

setTimeout(() => {
this.intro=false;

}, 3000);

  }


  ingresar(){
    this.router.navigate(['/seleccion'], { replaceUrl: false });
  console.log('dentro')
  }

  salir(){
    navigator['app'].exitApp();
  }
}
