import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MensagemService } from '../mensagens/mensagem.service';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  api = "http://localhost:50677/api/";
  categoria: any;

  constructor(
    private http: HttpClient,
    private mensagem : MensagemService,
    private router : Router,
    private storage : Storage
    ) {
    this.getCategorias();
   }

  getCategorias(){
    return new Promise(resolve => {
      this.http.get(this.api + "Categorias").subscribe(data => {
        resolve(data);
      },
      (error) => {
        console.log(error);
      })
    })
  }

  getCategoria(id: any){
    return new Promise(resolve => {
      this.http.get(this.api + "Categorias/"+id).subscribe(data => {
        resolve(data);
        //console.log(data);
      },
      (error) => {
        console.log(error);
      })
    })
  }

  cadastrarPrestador(nome: string, sobrenome: string, email: string,
    cpf: string, rg: string, nascimento: string, senha: string, categoriaId: number){
      return new Promise((resolve, reject)=>{

        this.getCategoria(categoriaId).then(s => {
          this.categoria = s;
          console.log(this.categoria);
        }).catch(e => {
          console.log(e)
        })

        var data = {
          nome : nome,
          sobrenome: sobrenome,
          email : email,
          cpf : cpf,
          rg : rg,
          nascimento : nascimento,
          senha: senha,
          categoriaId : categoriaId,
          categoria: this.categoria
        }
        this.http.post(this.api + "Prestadors",data)
          .subscribe((result:any) => {
            console.log(result);
            this.mensagem.cadastroSucesso();
            this.storage.set('prestador' , result);
            this.router.navigateByUrl('/perfil')
          },
          (error) => {
            console.log(error);
            this.mensagem.cadastroErro();
          })
      })
  }

  getPrestador(): Promise<any>{
    return this.storage.get('prestador');
  }
}
