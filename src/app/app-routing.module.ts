import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaFormComponent } from './tarea-form/tarea-form.component';
import { TareaListComponent } from './tarea-list/tarea-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'formulario', component: TareaFormComponent },
  { path: 'lista', component: TareaListComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/formulario' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
