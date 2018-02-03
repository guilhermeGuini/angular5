import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { DisciplinaService } from '../disciplina.service';
import { Router } from '@angular/router';
import { ProfessorComponent } from '../professor/professor.component';
import { QrcodeComponent } from '../qrcode/qrcode.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})

export class ConsultaComponent implements OnInit {
  displayedColumns = ['descricao', 'professores', 'dataInicio', 'dataTermino', 'segmento', 'id'];
  dataSource = null;

  constructor(private _disciplinaService: DisciplinaService,
              private _router: Router,
              private _dialog: MatDialog) {
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

  public gerarQRCode(idDisciplina) {
    let dialogRef = this._dialog.open(QrcodeComponent, {
      width: '260px',
      data: { disciplina: idDisciplina}
    });
  }

  public exibirProfessores(listProfessores) {
    let dialogRef = this._dialog.open(ProfessorComponent, {
      width: '250px',
      data: { professores: listProfessores }
    });
  }
}
