import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personaje } from '../interfaces/dbz.interface';
import { Agregar } from '../agregar/agregar';
import { Personajes } from '../personajes/personajes';

@Component({
  imports: [FormsModule, Agregar, Personajes],
  selector: 'app-main-page',
  styleUrl: './main-page.css',
  templateUrl: './main-page.html',
})
export class MainPage {
  personajes: Personaje[] = [
    {nombre: 'Goku', poder: 15000},
    {nombre: 'Vegeta', poder: 9000}
  ]

  agregarPersonaje(personaje:Personaje){
    this.personajes.push(personaje)
  }
  
}



