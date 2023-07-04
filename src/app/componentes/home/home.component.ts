import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PicoloService } from 'src/app/picolo.service';
import {ScreenOrientationOriginal,ScreenOrientation} from '@ionic-native/screen-orientation'
import { AndroidFullScreen } from '@awesome-cordova-plugins/android-full-screen';
import { Platform } from '@ionic/angular';
import { BastaComponent } from '../basta/basta.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
nombres:string[]=["kevin","gabriel","medina","El mas engazao","gabriel","medina","El mas engazao"];
nombre:string;
form: FormGroup;
entrar=false;
alerta=false;
contador:number=0;
constructor(private platform: Platform,private fb: FormBuilder, private servicio:PicoloService,private router: Router){ 
   this.form = this.fb.group({
  nombre: ['', Validators.required]
});
this.platform.backButton.subscribeWithPriority(10,()=>{
  this.router.navigate(['/seleccion'], { replaceUrl: false });
  console.log("navegado")
})

}
salirApp(){
  this.router.navigate(['/seleccion'], { replaceUrl: false });

}
  ngOnInit(): void {
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT)
  

  this.nombres=this.servicio.getNombres();
  if(this.nombres.length>2){
    this.entrar=true;
  }
}
navegar(){
  this.router.navigate(['libaton'], { replaceUrl: false });
}
ingresarUsuario(){

  this.nombre= this.form.get('nombre').value;
  this.form.reset();
  if(this.nombre.trim() !==""){
    this.contador+=1;
console.log(this.nombre)
 
this.servicio.agregarNombres(this.nombre);
if(this.nombres.length>2){
  this.entrar=true;
}
}else{
  alert("ingrese nombre valido")
  this.alerta=true;
}

}

borrar(i:number){
  console.log(i);
  this.servicio.getNombres().splice(i,1);
  if(this.servicio.getNombres().length<3){
    this.entrar=false;
  }
}



}
