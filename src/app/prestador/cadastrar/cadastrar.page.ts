import { Component, OnInit } from '@angular/core';
import { PrestadorService } from '../../api/prestador.service'

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  model: User;
  categorias: any;

  constructor(private prestador: PrestadorService) { 
    this.getCategorias();
    this.model = new User();
    this.model.nome='';
    this.model.sobrenome='';
    this.model.email = '';
    this.model.cpf='';
    this.model.rg='';
    this.model.nascimento='';
    this.model.senha='';
    this.model.categoria = 0;
  }

  ngOnInit() {
  }

  cadastrarPrestador(){
    this.prestador.cadastrarPrestador(this.model.nome, this.model.sobrenome,
      this.model.email, this.model.cpf, this.model.rg, this.model.nascimento,
      this.model.senha, this.model.categoria).then(s =>{
        console.log("cadastrado");
      }).catch(e => {
        console.log("erro")
      })
  }

  getCategorias(){
    this.prestador.getCategorias().then(s => {
      this.categorias = s;
      console.log(this.categorias);
    }).catch(e => {
      console.log(e);
    })
  }

}

export class User {
  nome: string;
  sobrenome: string;
  email: string;
  cpf: string;
  rg: string;
  nascimento: string;
  senha: string;
  categoria: number;
}