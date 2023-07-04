import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {ScreenOrientationOriginal,ScreenOrientation} from '@ionic-native/screen-orientation'
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit{
  handlerMessage = '';
  roleMessage = '';
component=HomeComponent;
  ngOnInit(): void {
    console.log(this.router.url)
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT)

  
  }
  constructor(private router:Router){}
  navegar(){
    this.router.navigate(['suave'],{replaceUrl:true});
  }
  
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.handlerMessage = 'Alert canceled';
      },
    },
    {
      text: 'Salir',
      role: 'confirm',
      handler: () => {
        navigator["app"].exitApp();  
      },
    },
  ];

  setResult(ev) {
    this.roleMessage = `Dismissed with role: ${ev.detail.role}`;
  }
  salirApp(){
    

  }
}
