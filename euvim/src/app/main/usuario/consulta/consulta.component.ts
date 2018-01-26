import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})

export class ConsultaComponent implements OnInit {
  displayedColumns = ['nome', 'email', 'login', 'perfil', 'id'];
  dataSource = null;

  constructor(private _usuarioService: UsuarioService,
              private _router: Router) {
  }
  
  ngOnInit(): void {
    this.getUsuarios();
  }

  private getUsuarios() {
    let lista = this._usuarioService.list();
    this.dataSource = new MatTableDataSource<any>(lista);
  }

  public excluir(id) {
    var canDelete = confirm('Tem certeza que sejesa excluir?');
    if(canDelete) {
      this._usuarioService.delete(id);
      this.getUsuarios();
    }
  }

  public edit(id) {
    this._router.navigate(['/main/usuario/editar', id]);
  }
}
