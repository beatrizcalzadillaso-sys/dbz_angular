import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  imports: [FormsModule],
  selector: 'app-agregar',
  styleUrl: './agregar.css',
  templateUrl: './agregar.html',
})
export class Agregar {
  
  @Output() personajeAgregado = new EventEmitter<Personaje>();
  nuevo: Personaje ={
    nombre: ' ',
    poder: 0
  }
  
  agregar(){
    if (this.nuevo.nombre.trim().length===0) return; 
    console.log(this.nuevo);
    this.personajeAgregado.emit(this.nuevo)
    this.nuevo = {nombre: '', poder: 0 }
  }

}
