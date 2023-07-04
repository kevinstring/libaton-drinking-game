import { Component, OnInit } from '@angular/core';
import { PicoloService } from 'src/app/picolo.service';
import { HomeComponent } from '../../home/home.component';
import { Retos } from 'src/app/retos';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {ScreenOrientationOriginal,ScreenOrientation} from '@ionic-native/screen-orientation'
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-extremo',
  templateUrl: './extremo.component.html',
  styleUrls: ['./extremo.component.css']
})
export class ExtremoComponent implements OnInit {
  retos:Retos[]=[];
  random:number=0;
  randomNombre:number;
  randomSegundoNombre:number;
  contador:number=0;
  nombre:string[]=[];
  retoUnitaro=false;
  retoCompartido=false;
  activar=false;
  finalizar=false;
  show=false;
  descripcion="";
  boolEntra=false;
  boolAll=false;
  contadorBotella = 0;
  boolBotellita=false;
  boolEntraBotellita=false;
  opciones:string[];
  randomOpcion:number;
  constructor(private servicio:PicoloService, private home:HomeComponent
    ,private router: Router,private location: Location, private plataforma:Platform){
    
  }
    ngOnInit(): void {
     ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.LANDSCAPE);
      // this.plataforma.resize.subscribe(async () => {
      //   alert('Resize event detected');
      // });
    
    this.plataforma.backButton.subscribeWithPriority(0,()=>{
      this.location.go('/seleccion');
    })
      this.nombre.push(...this.servicio.getNombres())
    
      this.servicio.getRetos('extremo').subscribe((a:Retos[])=>{
         this.retos=a.filter(reto=>{return   localStorage.getItem('retoE' +reto.id)!=='jugado';
  
  
       })
       console.log(this.retos)    }  
        )
     ;
  
   
    }
  
  
    navegar(){
      this.location.go('/seleccion')
    }
  
    cambiar(){
  
      if(this.retos.length==0){
        localStorage.clear();
        this.finalizar=true;
      }
      this.show=true;
      this.activar=true;
  
      this.retos.splice(this.random,1);
  
      this.randomSegundoNombre=Math.floor(Math.random()*this.nombre.length)
      this.randomNombre=Math.floor(Math.random()*this.nombre.length)
      this.random=Math.floor(Math.random()*this.retos.length)
      this.contador+=1;
      if(!this.boolEntra){
        localStorage.setItem('retoE' +this.retos[this.random].id, 'jugado');
      }
     if(this.contador<30){
        if(this.retos.length>0){
        
          do{
            if(this.randomNombre==this.randomSegundoNombre){
              this.randomSegundoNombre=Math.floor(Math.random()*this.nombre.length)
            }
          }while(this.randomNombre==this.randomSegundoNombre);
    
          if(this.boolEntraBotellita){
              this.boolBotellita=true;
              this.retos[this.random].titulo="";
              this.descripcion="";
       
          }else
          if(this.boolEntra){
            this.randomOpcion=Math.floor(Math.random()*this.opciones.length)
    
            this.descripcion=this.opciones[this.randomOpcion];
            this.retos[this.random].titulo="";
    
     
            this.boolEntra=false;
          }else
          if(this.retos[this.random].nivel=="all"){
            this.boolAll=true;
            this.descripcion=this.retos[this.random].descripcion;
    
            
          }
         else if(/usuario2/i.test(this.retos[this.random].descripcion)  && this.retos[this.random].nivel=="couple"){
            this.retoCompartido=true;
    
            this.descripcion= this.retos[this.random].descripcion.replace('usuario1', ' ' +`<span class="nombre-color">${this.nombre[this.randomNombre]}</span>`).replace('usuario2', ' ' + `<span class="nombre-color">${this.nombre[this.randomSegundoNombre]}</span>`)
    
           }else if(/usuario1/i.test(this.retos[this.random].descripcion) &&this.retos[this.random].nivel=="single"){
              this.retoUnitaro=true;
              this.descripcion= this.retos[this.random].descripcion.replace('usuario1', ' ' +`<span class="nombre-color">${this.nombre[this.randomNombre]}</span>`)
    
    
              
             }
            else if(this.retos[this.random].nivel=="coop"){
              this.boolEntra=true;
              this.opciones=this.retos[this.random].opciones;
              this.descripcion= this.retos[this.random].descripcion.replace('usuario1', ' ' +`<span class="nombre-color">${this.nombre[this.randomNombre]}</span>`).replace('usuario2', ' ' + `<span class="nombre-color">${this.nombre[this.randomSegundoNombre]}</span>`).replace('Libaton', `<span class="Lib-color";'>Libaton</span>`)
    
    
            }
    
            else if(this.retos[this.random].nivel=="botellita"){
     
              this.boolEntraBotellita=true;
              this.descripcion=this.retos[this.random].descripcion;
              console.log("Dentro")
            
              
            }
           
          }else{this.finalizar=true}
         
      }else{this.finalizar=true}
      setTimeout(() => {
        this.show = false;
      }, 1000);  
    
      }
    
      botellita(){  
    
            console.log("boteshita");
        this.contadorBotella+=1;
        console.log(this.contadorBotella)
        if(this.contadorBotella==2){
          this.boolEntraBotellita=false;
          this.boolBotellita=false;
           this.cambiar();
           this.contadorBotella=0;
    
        }
          }

  }


