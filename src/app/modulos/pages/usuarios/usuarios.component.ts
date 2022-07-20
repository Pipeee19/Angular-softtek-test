import { Component, OnInit } from '@angular/core';
import { UsuarioI } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private usuarioService : UsuariosService) { }
  usuariosLista : UsuarioI[] = [];
  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(res =>{
      this.usuariosLista = res;
    })
  }

}
