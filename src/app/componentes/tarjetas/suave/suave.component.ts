import { Component, OnInit } from '@angular/core';
import { PicoloService } from 'src/app/picolo.service';
import { Retos } from 'src/app/retos';
import { HomeComponent } from '../../home/home.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {  } from '@awesome-cordova-plugins/screen-orientation';
import { Platform } from '@ionic/angular';
import {ScreenOrientationOriginal,ScreenOrientation} from '@ionic-native/screen-orientation'

@Component({
  selector: 'app-suave',
  templateUrl: './suave.component.html',
  styleUrls: ['./suave.component.css']
})
export class SuaveComponent implements OnInit {
  retos:Retos[]=[];
  random:number=0;
  randomNombre:number;
  randomSegundoNombre:number;
  contador:number=0;
  nombre:string[]=[];
  retoUnitaro=false;
  retoCompartido=false;
  numero:number=0;
  number:number=0;
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
  descripcionFinal:string;
  randomOpcion:number;
  abcd:string[]=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v']
  constructor(private servicio:PicoloService, private home:HomeComponent
    ,private router: Router,private location: Location){

    
  }
    ngOnInit(): void {
      console.log(this.router.url)
     ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.LANDSCAPE);
      // this.plataforma.resize.subscribe(async () => {
      //   alert('Resize event detected');
      // });
  
      this.nombre.push(...this.servicio.getNombres())
  
      this.servicio.getRetos('suave').subscribe((a:Retos[])=>{
         this.retos=a.filter(reto=>{return   localStorage.getItem('retoS' +reto.id)!=='jugado';
      
  
       })
       console.log(this.retos)    }  
        )
     ;
  
   
    }



  
  
    navegar(){
      this.location.back()
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
      this.randomOpcion=Math.floor(Math.random()*this.abcd.length);
      this.contador+=1;
  
      if(!this.boolEntra ){
        localStorage.setItem('retoS' +this.retos[this.random].id, 'jugado');
      }
    
     if(this.contador<30){
        if(this.retos.length>0){
        
          do{
            if(this.randomNombre==this.randomSegundoNombre){
              this.randomSegundoNombre=Math.floor(Math.random()*this.nombre.length)
            }
          }while(this.randomNombre==this.randomSegundoNombre);
       
          if(this.number==this.contador){
            console.log("Son iguales ");
            this.retos[this.random].titulo="";
            this.descripcion=this.descripcionFinal
            console.log(this.descripcion)
            console.log(this.descripcionFinal)
        }
         else if(this.boolEntraBotellita){
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

            this.descripcion= this.retos[this.random].descripcion.replace('$letra', ''+this.abcd[this.randomOpcion].toUpperCase());

            
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

            else if (this.retos[this.random].nivel=="condicion"){
              this.condicion();
              this.descripcion=this.retos[this.random].descripcion;
              this.descripcionFinal=this.retos[this.random].final;
              
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

          condicion(){
      
            console.log(this.contador);
            for( let i =30;i>=this.contador;i--){
             this.numero = 30-i;
            }
          console.log(this.numero);
            if(this.contador!=29 && this.numero <=30){
              do{
                this.number = Math.floor(Math.random()* 30)
              
              }while(this.number<=this.contador)
              console.log(this.number)
            }
          }
         

  }




