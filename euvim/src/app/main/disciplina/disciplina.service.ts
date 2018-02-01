import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DisciplinaService {

  private mock =  [
    {id: 1, nome: 'Hydrogen', login: 'hydrogen', email: 'hydrogen@net.com', perfil: 'ADMINISTRADOR'},
    {id: 2, nome: 'Helium', login: 'helium', email: 'helium@net.com',  perfil: 'PROFESSOR'},
    {id: 3, nome: 'Lithium', login: 'lithium', email: 'lithium@net.com',  perfil: 'ADMINISTRADOR'},
    {id: 4, nome: 'Berayllium', login: 'bery', email: 'bery@net.com',  perfil: 'ALUNO'}
  ];

  private _urlDisciplina = environment.url + "/api/v1/disciplinas";

  constructor(private _httpClient: HttpClient) { 
  }

  add(newDisciplina) {
    return this._httpClient.post(this._urlDisciplina, newDisciplina, {responseType: 'text'});
  }

  delete(id) {
    return this._httpClient.delete(this._urlDisciplina + "/" + id, {responseType: 'text'});
  }

  edit(disciplina) {
    return this._httpClient.put(this._urlDisciplina + "/" + disciplina.id, disciplina, {responseType: 'text'});
  }

  list() {
    return this._httpClient.get<Array<any>>(this._urlDisciplina);
  }

  findById(id) {
    return this._httpClient.get<any>(this._urlDisciplina + "/" + id);
  }

}
