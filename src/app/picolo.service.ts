import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adivina, Retos } from './retos';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicoloService {
  
 private url="https://picolo2-ac489-default-rtdb.firebaseio.com/";
  names:string[]=[];
  retos:number[]=[];
  constructor(private http:HttpClient) { }

  getRetos(id:string){
   return this.http.get<Retos[]>(`${this.url}/${id}.json`).pipe(map((a:Retos[])=>{
      const nombre:Retos[]=[];
   for(let i in a ){
    nombre.push({ ...a[i]});  
  
   }
 
return nombre}))};
getAdivina(id:string){
  return this.http.get<Adivina[]>(`${this.url}/${id}.json`).pipe(map((a:Adivina[])=>{
    const nombre:Adivina[]=[];
 for(let i in a ){
  nombre.push({ ...a[i]});  

 }

return nombre}))
}
agregarNombres(nombre:string){
this.names.push(nombre);
  
}

retosRepetidos(id:number){
  this.retos.push(id);
}

getRetosRe():number[]{
  return this.retos;
}

getNombres():string[]{
  return this.names;
}
  }

