import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})

export class ConsultaComponent implements OnInit {
  displayedColumns = ['nome', 'email', 'login', 'perfil', 'id'];
  dataSource = null;

  constructor(private _usuarioService: UsuarioService,
              private _router: Router,
              private _loadingService: LoadingService) {
  }
  
  ngOnInit(): void {
    this.getUsuarios();
  }

  private getUsuarios() {
    this._loadingService.callNextStatus(true);
    this._usuarioService.list().subscribe(suc => {
      console.dir(suc);
      this.dataSource = new MatTableDataSource<any>(suc);
      this._loadingService.callNextStatus(false);
    }, error => { this._loadingService.callNextStatus(false) });
  }

  public excluir(id) {
    var canDelete = confirm('Tem certeza que sejesa excluir?');
    if(canDelete) {
      this._usuarioService.delete(id).subscribe(suc=> {
        this.getUsuarios();   
      });
    }
  }

  public edit(id) {
    this._router.navigate(['/main/usuario/editar', id]);
  }
}
