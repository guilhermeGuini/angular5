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
  public filtred = false;

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
    this._relatorioService.listarPresencaPorDisciplina(1).subscribe(suc=> {
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
