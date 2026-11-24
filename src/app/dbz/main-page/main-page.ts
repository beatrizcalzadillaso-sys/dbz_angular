import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-main-page',
  styleUrl: './main-page.css',
  templateUrl: './main-page.html',
})
export class MainPage {
  personajes: Personaje[] = [
    {nombre: 'Goku', poder: 15000},
    {nombre: 'Vegeta', poder: 9000}
  ]
  
  nuevo:Personaje ={
    nombre: ' ',
    poder: 0
  }
  
  agregar(){
    if (this.nuevo.nombre.trim().length===0) return;
    console.log(this.nuevo);
    this.personajes.push(this.nuevo)
    this.nuevo = {nombre: '', poder: 0 }
  }
}

interface Personaje{
  nombre: String;
  poder: number
}
