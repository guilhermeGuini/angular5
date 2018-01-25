import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  perfis = [
    { },
    { 'id': 'PROFESSOR', 'descricao': 'Professor'}  ,
    { 'id': 'ADMINISTRADOR', 'descricao': 'Administrador'},
    { 'id': 'ALUNO', 'descricao': 'Aluno'}
   ];

  form: FormGroup;

  hideSenha = true;
  hideConfirmacao = true;

  constructor(private _formBuilder: FormBuilder) { 
    this.form = this._formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      email: ['', Validators.compose(
        [ 
          Validators.required,
          Validators.email
        ])
      ],
      login: ['', Validators.required],
      perfil: ['', Validators.required],
      senha: ['', Validators.required],
      confirmacao: ['', Validators.required]
    });

  }
  
  ngOnInit() {
  }

  clearForm() {
    console.log('Clear all fields');

    this.form.reset();
  }
}

