import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ProfessorService } from '../professor.service';

@Component({
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {
  
  public listProfessores = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private _professorService: ProfessorService) { 
  }

  ngOnInit(): void {
    this.data.professores.forEach(id => {
      this._professorService.findById(id).subscribe(suc=> {
        this.listProfessores.push(suc);
      });
    });
  }
}
