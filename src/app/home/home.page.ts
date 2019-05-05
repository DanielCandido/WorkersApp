import { Component } from '@angular/core';
import { PrestadorService } from '../api/prestador.service';
import { Route, Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categorias: any;

  constructor(
    private prestador : PrestadorService,
    private router : Router
    )
  {
    this.verifica();
  }

  verifica(){
    this.prestador.getPrestador().then(s => {
      if(s != null){
        this.router.navigateByUrl('/prestador/perfil');
      } else {
        this.router.navigateByUrl('/home');
      }
    })
  }

}
