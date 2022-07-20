import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UsuarioI } from '../interfaces/usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  urlApi = 'https://jsonplaceholder.typicode.com/users';
  
  getUsuarios(): Observable<UsuarioI[]> {
    return this.http.get<UsuarioI[]>(this.urlApi);
  }
}
