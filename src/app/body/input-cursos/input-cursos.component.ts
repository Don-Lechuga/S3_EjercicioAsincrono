import { Component } from '@angular/core';

@Component({
  selector: 'app-input-cursos',
  templateUrl: './input-cursos.component.html',
  styleUrls: ['./input-cursos.component.css']
})
export class InputCursosComponent {

 /*  cursos!:string[]; */
  cursos = ['Listado de Cursos: ']

  addCurso(c:String){
    this.cursos.push(String(c))
  }


}
