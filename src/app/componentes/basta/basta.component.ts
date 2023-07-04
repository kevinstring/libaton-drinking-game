import { Component, OnInit } from '@angular/core';
import { Subscription, async, interval, take } from 'rxjs';

@Component({
  selector: 'app-basta',
  templateUrl: './basta.component.html',
  styleUrls: ['./basta.component.scss'],
})
export class BastaComponent  implements OnInit {
  letras:string[]=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v"]
  categoria = [
    'Nombres propios',
    'Animales',
    'Países',
    'Ciudades',
    'Alimentos',
    'Frutas',
    'Verduras',
    'Cosas que se encuentran en un escritorio',
    'Colores',
    'Marcas de automóviles',
    'Instrumentos musicales',
    'Deportes',
    'Héroes de ficción',
    'Personajes de películas',
    'Personajes de libros',
    'Cantantes o bandas',
    'Películas',
    'Libros',
    'Superpoderes',
    'Elementos químicos',
    'Profesiones',
    'Capitales del mundo',
    'Deportes olímpicos',
    'Instrumentos de cocina',
    'Partes del cuerpo',
    'Juguetes',
    'Marcas de ropa',
    'Lugares turísticos',
    'Objetos que se encuentran en una casa',
    'Personajes históricos',
    'Estaciones del año',
    'Instrumentos de escritura',
    'Redes sociales',
    'Monedas',
    'Emociones',
    'Instrumentos de percusión',
    'Medios de transporte',
    'Idiomas',
    'Canciones famosas',
    'Bebidas',
    'Platos típicos',
    'Instrumentos de viento',
    'Muebles',
    'Superhéroes',
    'Villanos',
    'Juegos de mesa',
    'Instrumentos de cuerda',
    'Figuras geométricas',
    'Objetos de uso diario',
    'Marcas de tecnología',
  ];  letra:string=""
  cat:string=""
  numbers = interval(80);
  subscripcion: Subscription
  otraSub:Subscription
  aparecerLetra=false;
  presioname=false;
  animacion='animation:none';
  constructor() { }

  ngOnInit() {  
 

    this.desordenar()
      console.log(this.letras);}
   desordenar() {
    let currentIndex = this.letras.length;
  
    let temporaryValue, randomIndex
  
    // Mientras aún queden elementos para desordenar
    while (currentIndex !== 0) {
      // Obtener un índice aleatorio
      randomIndex = Math.floor(Math.random() * currentIndex);
     
      currentIndex -= 1;
    
  
      // Intercambiar el elemento actual con el elemento aleatorio
      temporaryValue = this.letras[currentIndex];
     
    
      this.letras[currentIndex] = this.letras[randomIndex];
      this.letras[randomIndex] = temporaryValue;

    }

  }
  desordenar2() {
    let currentIndex = this.categoria.length;
  
    let temporaryValue, randomIndex
  
    // Mientras aún queden elementos para desordenar
    while (currentIndex !== 0) {
      // Obtener un índice aleatorio
      randomIndex = Math.floor(Math.random() * currentIndex);
     
      currentIndex -= 1;
    
  
      // Intercambiar el elemento actual con el elemento aleatorio
      temporaryValue = this.categoria[currentIndex];
     
    
      this.categoria[currentIndex] = this.categoria[randomIndex];
      this.categoria[randomIndex] = temporaryValue;

    }

  }
   cambiar(){
    this.desordenar()
    this.desordenar2()
  this.presioname=true
    this.animacion='animation:rotate .2s ease-in infinite'
      this.aparecerLetra=false
    if(this.subscripcion || this.otraSub){
      this.subscripcion.unsubscribe()
      this.otraSub.unsubscribe()
    }


let takeFourNumbers = this.numbers.pipe(take(10));
let takeOther = this.numbers.pipe(take(10))
 this.subscripcion=takeFourNumbers.subscribe( x =>{
  
  this.letra=this.letras[x].toUpperCase();
 
}
  );
  setTimeout(()=>this.aparecerLetra=true,1000)
  this.otraSub=takeOther.subscribe(x=>{this.cat=this.categoria[x]})
  }
}
