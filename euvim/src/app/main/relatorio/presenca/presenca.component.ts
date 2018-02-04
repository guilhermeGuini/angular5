import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisciplinaService } from '../../services/disciplina.service';
import { RelatorioService } from '../relatorio.service';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.scss']
})
export class PresencaComponent implements OnInit {

  public form: FormGroup;
  public disciplinas = [];
  public relatorio = [];
  public presenca = [];
  public filtred = false;
  public disciplina = null;

  constructor(private _formBuilder: FormBuilder,
              private _disciplinaService: DisciplinaService,
              private _relatorioService: RelatorioService) { 

    this.initOptions();
  }

  ngOnInit() {
    this._disciplinaService.list().subscribe(suc=> {
      this.disciplinas = suc;
    });
  }

  public gerarRelatorio() {
    this.filtred = true;
    this.relatorio = null;
    this.disciplina = this.disciplinas.find((item) =>  item.id == this.form.value.disciplina );

    this._relatorioService.listarPresencaPorDisciplina(this.form.value)
    .subscribe(suc=> {
      console.log(suc);
      this.relatorio = suc;
    });
  }

  public abrirCalendario() {

  }

  private initOptions() {
    this.form = this._formBuilder.group({
      disciplina: [null, Validators.required],
      dataInicio: [null, Validators.required],
      dataFim: [null, Validators.required]
    });
  }
}
