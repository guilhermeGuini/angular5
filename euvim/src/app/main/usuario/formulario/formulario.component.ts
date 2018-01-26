import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EqualsPasswordValidator } from '../../../validators/EqualsPasswordValidator';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  private id;

  perfis = [
    { },
    { 'id': 'PROFESSOR', 'descricao': 'Professor'}  ,
    { 'id': 'ADMINISTRADOR', 'descricao': 'Administrador'},
    { 'id': 'ALUNO', 'descricao': 'Aluno'}
   ];

  form: FormGroup;

  hideSenha = true;
  hideConfirmacao = true;

  constructor(private _formBuilder: FormBuilder, 
              private _usuarioService: UsuarioService,
              private _activatedRoute:ActivatedRoute,
              private _router: Router) { 
    
    this.initOptions();
  }
  
  ngOnInit() {
    this._activatedRoute.params.subscribe(params=> {
      this.id = params['id'];
      if(this.id) {
        this.loadUsuario();
      }
    });
  }

  save() {
    if(this.form.valid) {
      if(this.id) {
        this._usuarioService.edit(this.form.value);
      } else {      
        this._usuarioService.add(this.form.value);
      }
    }
    
    this.form.reset();
    this._router.navigate(['/main/usuario/consulta']);
  }

  clearForm() {
    if(this.id) {
      this._router.navigate(['/main/usuario/adicionar']);
    } else {
      this.id = null;
      this.form.reset();
    }
  }

  private initOptions() {
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
      }, {validator: 
          EqualsPasswordValidator.validate("senha", "confirmacao")
         }
    );
  }

  private loadUsuario(){
    let usuario = <any> this._usuarioService.findById(this.id);
    usuario.senha = null;
    usuario.confirmacao = null;
    this.form.setValue(usuario);
    this.form.get('senha').setValidators(null);
    this.form.get('confirmacao').setValidators(null);
  }
}

