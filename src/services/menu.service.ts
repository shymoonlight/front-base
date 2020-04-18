import { Injectable } from '@angular/core';
import { GrupoMenuModel } from 'models/menu.models';
import { UsuarioLoginService } from './usuario-login.service';
import { ItemMenuModel } from './item-menu.model';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  constructor(private _usuarioLoginService: UsuarioLoginService,
              private _fuseNavigationService: FuseNavigationService,
              private _router: Router) {  }

    crearMenu(): void {
        this.limpiarMenu();
        const usuarioLogin = this._usuarioLoginService.obtenerUsuario();
        if (usuarioLogin) {
            for (const area of usuarioLogin.areas) {
                const grupoMenu: GrupoMenuModel = {
                    id: 'grupo-' + area.nArea,
                    title: area.cDescripcion,
                    type: 'group',
                    children: []
                };
        
                for (const modulo of area.modulos) {
                    const itemMenu: ItemMenuModel = {
                        id: 'modulo-' + modulo.nModulo.toString(),
                        title: modulo.cDescripcion,
                        type: 'item',
                        icon: 'keyboard_arrow_right',
                        function: () => {
                            this._router.navigate([modulo.cUrl]);
                        }
                    };
        
                    grupoMenu.children.push(itemMenu);
                }
        
                this._fuseNavigationService.addNavigationItem(grupoMenu, 'end');
            }
        }
    }

    limpiarMenu(): void {
        const menuActual = this._fuseNavigationService.getCurrentNavigation();

        for (const itemMenu of menuActual) {
            this._fuseNavigationService.removeNavigationItem(itemMenu.id);
        }
    }
}
