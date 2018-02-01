import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DisciplinaService } from '../disciplina.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InstrutorService } from '../instrutor.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  private id;
  form: FormGroup;

  segmentos = [
    { },
    { 'id': 'BACKEND', 'descricao': 'Backend'}  ,
    { 'id': 'FONTEND', 'descricao': 'Frontend'},
    { 'id': 'MOBILE', 'descricao': 'Mobile'}
   ];
  
  instrutores = [];

  constructor(private _formBuilder: FormBuilder, 
              private _disciplinaService: DisciplinaService,
              private _instrutorService: InstrutorService,
              private _activatedRoute:ActivatedRoute,
              private _router: Router) { 
    
    this.initOptions();
  }
  
  ngOnInit() {

    this._instrutorService.getAll().subscribe(suc => {
      this.instrutores = suc
    });

    this._activatedRoute.params.subscribe(params=> {
      this.id = params['id'];
      if(this.id) {
        this.loadDisciplina();
      }
    });
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
        instrutores: this._formBuilder.array([]),
        dataInicio: ['', Validators.required],
        dataTermino: ['', Validators.required],
        segmento: ['', Validators.required],
        urlLogo: ['']
      }
    );
  }

  private loadDisciplina(){
    this._disciplinaService.findById(this.id)
      .subscribe(disciplina => {
        //delete disciplina.urlFoto;
        this.form.setValue(disciplina);
      });
  }
}

