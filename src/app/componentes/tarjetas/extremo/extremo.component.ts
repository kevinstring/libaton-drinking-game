import { Component, OnInit } from '@angular/core';
import { PicoloService } from 'src/app/picolo.service';
import { HomeComponent } from '../../home/home.component';
import { Retos } from 'src/app/retos';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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
  retosRepetidos:number[]=[];
  verdadero=false;
  retoCompartido=false;
activar=false;
finalizar=false;
show=false;
  ngOnInit(): void {

    this.nombre.push(...this.servicio.getNombres()) 
    this.servicio.getRetos('extremo').subscribe((a:Retos[])=>{
     console.log(this.retos)
       this.retos=a.filter(reto=>{return   localStorage.getItem('retoE-' +reto.id)!=='jugado';
     
     })
   }
      )
   ;
   document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
    this.cambiar();
    }
  });
  }

  constructor(private servicio:PicoloService, private home:HomeComponent,private router: Router,private location: Location){
   
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
    this.random=Math.floor(Math.random()*this.retos.length)
    this.randomNombre=Math.floor(Math.random()*this.nombre.length)

    this.contador+=1;
    localStorage.setItem('retoE-' +this.retos[this.random].id, 'jugado');


   if(this.contador<=30){

if(this.retos.length>0){
  do{
    if(this.randomNombre==this.randomSegundoNombre){
      this.randomSegundoNombre=Math.floor(Math.random()*this.nombre.length)
    }
  }while(this.randomNombre==this.randomSegundoNombre);
  if(this.retos[this.random].nivel=="single"){
    this.verdadero=true;
   }else{
     this.verdadero=false; 
    }

   if(/:/i.test(this.retos[this.random].descripcion)  && this.retos[this.random].nivel=="couple"){
    this.retoCompartido=true;
   }else{this.retoCompartido=false}
 
   }else{      ;}
  }else{this.finalizar=true}
  setTimeout(() => {
    this.show = false;
  }, 1000);
}

  }

