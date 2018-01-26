import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EqualsPasswordValidator } from '../../validators/EqualsPasswordValidator';
import { UsuarioService } from '../usuario.service';

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

  constructor(private _formBuilder: FormBuilder, private _usuarioService: UsuarioService) { 
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
      confirmacao: ''//['', Validators.required]
    }, {validator: 
          EqualsPasswordValidator.validate("senha", "confirmacao")});

  }
  
  ngOnInit() {
  }

  save() {
    let usuario = {'id': this.form.controls['id'].value,
                   'nome': this.form.controls['nome'].value,
                   'email': this.form.controls['email'].value,
                   'login': this.form.controls['login'].value,
                   'perfil': this.form.controls['perfil'].value,
                   'senha': this.form.controls['senha'].value};
    this._usuarioService.add(usuario);
  }

  clearForm() {
    console.log('Clear all fields');

    this.form.reset();
  }
}

