import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  perfis = [
    { },
    { 'id': 'PROFESSOR', 'descricao': 'Professor'}  ,
    { 'id': 'ALUNO', 'descricao': 'Aluno'},
    { 'id': 'DIRETOR', 'descricao': 'Diretor'}
   ];
   
  constructor() { }

  ngOnInit() {
  }

}

