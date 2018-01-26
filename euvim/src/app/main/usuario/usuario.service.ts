import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  private mock =  [
    {id: 1, nome: 'Hydrogen', login: 'hydrogen', email: 'hydrogen@net.com', perfil: 'ADMINISTRADOR'},
    {id: 2, nome: 'Helium', login: 'helium', email: 'helium@net.com',  perfil: 'PROFESSOR'},
    {id: 3, nome: 'Lithium', login: 'lithium', email: 'lithium@net.com',  perfil: 'ADMINISTRADOR'},
    {id: 4, nome: 'Berayllium', login: 'bery', email: 'bery@net.com',  perfil: 'ALUNO'}
  ];

  constructor() { }

  add(newUsuario) {
    let idInsert = 0;

    this.mock.forEach(item => idInsert = item.id > idInsert ? 
                              item.id : 
                              idInsert);

    newUsuario.id = idInsert + 1;

    this.mock.push(newUsuario);
  }

  delete(id) {
    let index = this.mock.findIndex(item => item.id == id);
    
    if(index > -1) {
      this.mock.splice(index, 1);
    }
  }

  edit(usuario) {
    let index = this.mock.findIndex(item => 
                          item.id == usuario.id);

    if(index > -1) {
      this.mock[index]= usuario;
    }
  }

  list() {
    return this.mock;
  }

  findById(id) {
    return this.mock.find(item => item.id == id);
  }

}
