import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})

export class ConsultaComponent implements OnInit {
  displayedColumns = ['nome', 'email', 'login', 'perfil', 'id'];
  dataSource = null;

  constructor(private _usuarioService: UsuarioService) {
    this.dataSource = new MatTableDataSource<any>(_usuarioService.list());
  }
  
  ngOnInit(): void {
  }
}
