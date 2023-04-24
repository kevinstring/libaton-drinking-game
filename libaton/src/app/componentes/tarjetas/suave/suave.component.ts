import { Component, OnInit } from '@angular/core';
import { PicoloService } from 'src/app/picolo.service';
import { Retos } from 'src/app/retos';
import { HomeComponent } from '../../home/home.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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
  verdadero=false;
  retoCompartido=false;
activar=false;
finalizar=false;
show=false;
constructor(private servicio:PicoloService, private home:HomeComponent,private router: Router,private location: Location){
  
}
  ngOnInit(): void {
    console.log(this.router.url)
 
    this.nombre.push(...this.servicio.getNombres()) 

    this.servicio.getRetos('suave').subscribe((a:Retos[])=>{
     console.log(this.retos)
       this.retos=a.filter(reto=>{return   localStorage.getItem('reto-' +reto.id)!=='jugado';
     
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


  navegar(){
    this.location.back()
  }
  
  keydawn(evento:any){
      console.log(evento)
    // if (evento.code === 'Space') {
    //   console.log('si')
    //   this.cambiar()
    // }
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
    console.log(this.retos[this.random].id)
    localStorage.setItem('reto-' +this.retos[this.random].id, 'jugado');


   if(this.contador<30){


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
 
   }
  }else{this.finalizar=true}
  setTimeout(() => {
    this.show = false;
  }, 1000);

  }

  }




