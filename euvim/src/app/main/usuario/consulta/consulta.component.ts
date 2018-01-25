import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})

export class ConsultaComponent {
  displayedColumns = ['nome', 'email', 'login', 'perfil', 'id'];
  dataSource = new MatTableDataSource<Usuario>(USUARIO_DATA );

  delete (id: String) {
    if(!id) {
      console.log('Id não informado!');
      return;
    }
  }

  edit (usuario: Usuario) {
    if(!usuario) {
      console.log('Usuario não informado!');
      return;
    }
  }
}

export interface Usuario {
  id: number,
  nome: string;
  login: string;
  email: string;
  perfil: string;
}

const USUARIO_DATA : Usuario[] = [
  {id: 1, nome: 'Hydrogen', login: 'hydrogen', email: 'email@net.com', perfil: 'Admin'},
  {id: 2, nome: 'Helium', login: 'helium', email: 'email@net.com',  perfil: 'User'},
  {id: 3, nome: 'Lithium', login: 'lithium', email: 'email@net.com',  perfil: 'Admin'},
  {id: 4, nome: 'Beryllium', login: 'bery', email: 'email@net.com',  perfil: 'Admin'}
];

/*

  {nome: 'Boron', login: 10.811, email: 'B'},
  {nome: 'Carbon', login: 12.0107, email: 'C'},
  {nome: 'Nitrogen', login: 14.0067, email: 'N'},
  {nome: 'Oxygen', login: 15.9994, email: 'O'},
  {nome: 'Fluorine', login: 18.9984, email: 'F'},
  { nome: 'Neon', login: 20.1797, email: 'Ne'},
  { nome: 'Sodium', login: 22.9897, email: 'Na'},
  { nome: 'Magnesium', login: 24.305, email: 'Mg'},
  { nome: 'Aluminum', login: 26.9815, email: 'Al'},
  { nome: 'Silicon', login: 28.0855, email: 'Si'},
  { nome: 'Phosphorus', login: 30.9738, email: 'P'},
  { nome: 'Sulfur', login: 32.065, email: 'S'},
  { nome: 'Chlorine', login: 35.453, email: 'Cl'},
  { nome: 'Argon', login: 39.948, email: 'Ar'},
  { nome: 'Potassium', login: 39.0983, email: 'K'},
  { nome: 'Calcium', login: 40.078, email: 'Ca'},
*/