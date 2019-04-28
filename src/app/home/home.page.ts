import { Component } from '@angular/core';
import { PrestadorService } from '../api/prestador.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categorias: any;

  constructor(private prestador : PrestadorService){
 
  }

}
