import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { UsuarioModel } from 'models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private BASE_URL: string;
  private URL_USUARIOS = 'usuarios';

  constructor(private http: HttpClient) {
    this.BASE_URL = environment.API_BASE_URL;
  }

  obtenerUsuarios(): any {
    return this.http.get(this.BASE_URL + this.URL_USUARIOS);
  }

  obtenerUsuario(id: number): any{
    return this.http.get(this.BASE_URL + this.URL_USUARIOS + '/' + id);
  }

  guardarUsuario(usuario: UsuarioModel): any {
    return this.http.post(this.BASE_URL + this.URL_USUARIOS, usuario);

  }

  actualizarUsuario(usuario: UsuarioModel): any{
    return this.http.put(this.BASE_URL + this.URL_USUARIOS + '/' + usuario.nIdUsuario, usuario);
  }

  eliminarUsuario(usuario: UsuarioModel): any {
    return this.http.delete(this.BASE_URL + this.URL_USUARIOS + '/' + usuario.nIdUsuario);
  }


}
