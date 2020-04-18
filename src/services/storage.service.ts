import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

guardarUsuario( usuario: any  ): void {
  localStorage.setItem('usr', JSON.stringify(usuario));
}

obtenerUsuario(): any {
  const usuario = localStorage.getItem('usr');

  if (usuario) {
    const usr = JSON.parse(usuario);
    const token = usr.cToken;
    return usr;
  } else {
    return null;
  }

}

eliminarUsuario(): void {
  localStorage.removeItem('usr');
}

}
