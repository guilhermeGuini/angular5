import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DisciplinaService } from '../disciplina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})

export class ConsultaComponent implements OnInit {
  displayedColumns = ['descricao', 'instrutores', 'dataInicio', 'dataTermino', 'segmento', 'id'];
  dataSource = null;

  constructor(private _disciplinaService: DisciplinaService,
              private _router: Router) {
  }
  
  ngOnInit(): void {
    this.getDisciplinas();
  }

  private getDisciplinas() {
    this._disciplinaService.list().subscribe(suc => {
      console.dir(suc);
      this.dataSource = new MatTableDataSource<any>(suc);
    });
  }

  public excluir(id) {
    var canDelete = confirm('Tem certeza que sejesa excluir?');
    if(canDelete) {
      this._disciplinaService.delete(id).subscribe(suc=> {
        this.getDisciplinas();   
      });
    }
  }

  public edit(id) {
    this._router.navigate(['/main/disciplina/editar', id]);
  }
}
