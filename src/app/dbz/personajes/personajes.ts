import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  imports: [],
  selector: 'app-personajes',
  styleUrl: './personajes.css',
  templateUrl: './personajes.html',
})
export class Personajes {
  @Input() personajes: Personaje[] = [];
}
