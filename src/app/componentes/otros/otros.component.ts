import { Component, OnInit } from '@angular/core';
import { PicoloService } from 'src/app/picolo.service';
import { Retos } from 'src/app/retos';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css']
})
export class OtrosComponent implements OnInit{ 

  retosOtros:Retos[]=[];
  numeroAleatorio:number;
constructor(private servicio:PicoloService){

}

  ngOnInit(): void {

    this.servicio.getRetos('otros').subscribe(a=>{this.retosOtros=a})
    
  }


  cambiar(){
    this.numeroAleatorio= Math.floor(Math.random()*this.retosOtros.length)
  
  }
}
