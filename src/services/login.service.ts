import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private BASE_URL: string;
  private URL_LOGIN = 'login';

  constructor(private http: HttpClient) {
    this.BASE_URL = environment.API_BASE_URL;
  }

  validarUsuario(usuario: any): any {
    return this.http.post(this.BASE_URL + this.URL_LOGIN + '/validar/', usuario);
  }

}
