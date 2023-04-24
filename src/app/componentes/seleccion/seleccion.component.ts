import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit{

  ngOnInit(): void {
    console.log(this.router.url)
   

  }
  constructor(private router:Router){}
  // navegar(){
  //   this.router.navigate(['suave'],{replaceUrl:true});
  // }
}
