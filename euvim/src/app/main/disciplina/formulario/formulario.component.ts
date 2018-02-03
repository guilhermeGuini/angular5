import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DisciplinaService } from '../../services/disciplina.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfessorService } from '../../services/professor.service';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  segmentos = [
    { },
    { 'id': 'BACKEND', 'descricao': 'Backend'}  ,
    { 'id': 'FRONTEND', 'descricao': 'Frontend'},
    { 'id': 'MOBILE', 'descricao': 'Mobile'}
   ];
  
  form: FormGroup;
  id: null;

  professorSelecionado;

  professores = [];

  constructor(private _formBuilder: FormBuilder, 
              private _disciplinaService: DisciplinaService,
              private _professorService: ProfessorService,
              private _activatedRoute:ActivatedRoute,
              private _router: Router) { 
    
    this.initOptions();
  }
  
  ngOnInit() {

    this._professorService.getAll().subscribe(suc => {
      this.professores = suc;
      this.obterRegistroEdicao();
    });
  }

  private obterRegistroEdicao() {
    this._activatedRoute.params.subscribe(params=> {
      this.id = params['id'];
      if(this.id) {
        this._disciplinaService.findById(this.id)
            .subscribe(retorno => {
                let resultado = Object.assign({}, retorno);
                resultado.professores = [];
                this.form.setValue(resultado);
                console.log(retorno);
                retorno.professores.forEach(element => {
                  this.professorSelecionado = this.professores.find(item=> item.id == element);
                  this.addProfessor();
                });
              });
      }
    });
  }

  notFound(event) {
    console.log(event);
    event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOeGO8GOMaspOZHx63AX9XtfHlVsIuIrSCU0_bLbDAIPjuzS2";
  }

  save() {
    if(this.form.valid) {
      if(this.id) {
        this._disciplinaService.edit(this.form.value)
          .subscribe(suc=> {
            this.form.reset();
            this._router.navigate(['/main/disciplina/consulta']);  
          });
      } else {      
        this._disciplinaService.add(this.form.value)
          .subscribe(suc=>{
            this.form.reset();
            this._router.navigate(['/main/disciplina/consulta']);  
          });
      }
    }
  }

  addProfessor() {
    if(this.professorSelecionado) {
      let listProfessores = <FormArray>this.form.get("professores");
      console.log(listProfessores);
      listProfessores.value.push(this.professorSelecionado.id);
      this.professorSelecionado.selecionado = true;
      delete this.professorSelecionado;
    }
  }

  removeProfessor(id) {
    let listProfessores = <FormArray>this.form.get("professores");
    let index = listProfessores.value.findIndex(item=> item == id);

    if(index > -1) {
      listProfessores.value.splice(index, 1);
      this.professores.find(item => item.id == id).selecionado = false;
    }
  }

  nomeProfessor(id) {
    let professor = this.professores.find(item=> item.id == id);
    return professor ? professor.nome : 'Não localizado';
  }

  clearForm() {
    if(this.id) {
      this._router.navigate(['/main/disciplina/adicionar']);
    } else {
      this.id = null;
      this.form.reset();
    }
  }

  private initOptions() {
    this.form = this._formBuilder.group({
        id: [''],
        descricao: ['', Validators.required],
        professores: this._formBuilder.array([]),
        dataInicio: ['', Validators.required],
        dataTermino: ['', Validators.required],
        segmento: ['', Validators.required],
        urlLogo: ['']
      }
    );
  }

}

