import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-item-presenca',
  templateUrl: './itempresenca.component.html',
  styleUrls: ['./itempresenca.component.scss']
})
export class ItempresencaComponent implements OnInit {

  @Input("dataInicio")
  private cursoInicio:Date;
  @Input("dataFim")
  private cursoFim:Date;
  @Input()
  private periodoInicial:Date;
  @Input()
  private periodoFinal:Date;
  @Input()
  private presencas:Array<String>;

  public presenca=[];

  constructor() { }

  ngOnInit() {
    let inicio = moment(this.cursoInicio).isSameOrAfter(this.periodoInicial) ? this.cursoInicio : this.periodoInicial;   
    let fim = moment(this.cursoFim).isSameOrBefore(this.periodoFinal) ? this.cursoFim : this.periodoFinal;
    let dataCurso = moment(inicio);
    while(dataCurso.isSameOrBefore(fim)){
      if(dataCurso.weekday() > 0 && dataCurso.weekday() < 6){
        this.presenca.push({
          data: dataCurso.toDate(), 
          presente: this.presencas.includes(dataCurso.format("YYYY-MM-DD")) 
        });
      }
      dataCurso.add(1, 'days');
    } 
  }

}
