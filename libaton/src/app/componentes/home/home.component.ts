import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PicoloService } from 'src/app/picolo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
nombres:string[]=[];
nombre:string;
form: FormGroup;
entrar=false;
contador:number=0;

constructor(private fb: FormBuilder, private servicio:PicoloService,private router: Router){ 
   this.form = this.fb.group({
  nombre: ['', Validators.required]
});


}
  ngOnInit(): void {

  this.nombres=this.servicio.getNombres();
  if(this.nombres.length>2){
    this.entrar=true;
  }
}
navegar(){
  this.router.navigate(['/seleccion'], { replaceUrl: false });
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
