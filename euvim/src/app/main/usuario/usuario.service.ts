import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  private mock =  [
    {id: 1, nome: 'Hydrogen', login: 'hydrogen', email: 'hydrogen@net.com', perfil: 'ADMINISTRADOR'},
    {id: 2, nome: 'Helium', login: 'helium', email: 'helium@net.com',  perfil: 'PROFESSOR'},
    {id: 3, nome: 'Lithium', login: 'lithium', email: 'lithium@net.com',  perfil: 'ADMINISTRADOR'},
    {id: 4, nome: 'Berayllium', login: 'bery', email: 'bery@net.com',  perfil: 'ALUNO'}
  ];

  private _urlUsuario = environment.url + "/api/v1/usuarios";

  constructor(private _httpClient: HttpClient) { 
  }

  add(newUsuario) {
    return this._httpClient.post(this._urlUsuario, newUsuario, {responseType: 'text'});
  }

  delete(id) {
    return this._httpClient.delete(this._urlUsuario + "/" + id, {responseType: 'text'});
  }

  edit(usuario) {
    return this._httpClient.put(this._urlUsuario + "/" + usuario.id, usuario, {responseType: 'text'});
  }

  list() {
    return this._httpClient.get<Array<any>>(this._urlUsuario);
  }

  findById(id) {
    return this._httpClient.get<any>(this._urlUsuario + "/" + id);
  }

}
