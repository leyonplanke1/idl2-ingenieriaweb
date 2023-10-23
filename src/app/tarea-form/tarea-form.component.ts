// tarea-form.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent {

  titulo: string = '';
  descripcion: string = '';

  listaTareas: any[] = []; 

  agregarTarea() {
    const nuevaTarea = {
      titulo: this.titulo,
      descripcion: this.descripcion
    };

    this.listaTareas.push(nuevaTarea);

    // Limpia los campos del formulario
    this.titulo = '';
    this.descripcion = '';
  }
}