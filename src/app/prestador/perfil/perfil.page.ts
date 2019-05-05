import { Component, OnInit } from '@angular/core';
import { PrestadorService } from '../../api/prestador.service';
 
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  prestador: any;

  constructor
  (
    private prestadorService : PrestadorService
  ) {this.getPrestador() }

  ngOnInit() {
  }

  getPrestador(){
    this.prestadorService.getPrestador().then(s => {
      this.prestador = s;
      console.log(s);
    }).catch(e => {
      console.error(e);
    })
  }
}
