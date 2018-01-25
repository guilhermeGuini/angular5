import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})

export class ConsultaComponent implements OnInit {
  displayedColumns = ['nome', 'email', 'login', 'perfil', 'id'];
  dataSource = new MatTableDataSource<Usuario>(USUARIO_DATA );

  constructor() {}
  
  ngOnInit(): void {
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
  {id: 1, nome: 'Hydrogen', login: 'hydrogen', email: 'hydrogen@net.com', perfil: 'Admin'},
  {id: 2, nome: 'Helium', login: 'helium', email: 'helium@net.com',  perfil: 'User'},
  {id: 3, nome: 'Lithium', login: 'lithium', email: 'lithium@net.com',  perfil: 'Admin'},
  {id: 4, nome: 'Beryllium', login: 'bery', email: 'bery@net.com',  perfil: 'Admin'}
];