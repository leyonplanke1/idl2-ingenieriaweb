// tarea-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})
export class TareaListComponent {
  tareas: { titulo: string, descripcion: string }[] = [];
  tareaEdit: { titulo: string, descripcion: string } | null = null;
  tareaIndex: number | null = null;

  editarTarea(index: number) {
    this.tareaEdit = { ...this.tareas[index] };
    this.tareaIndex = index;
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }

  guardarEdicion() {
    if (this.tareaEdit && this.tareaIndex !== null) {
      this.tareas[this.tareaIndex] = this.tareaEdit;
      this.tareaEdit = null;
      this.tareaIndex = null;
    }
  }
}
