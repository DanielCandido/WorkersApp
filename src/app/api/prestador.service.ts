import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  api = "http://localhost:50677/api/"

  constructor(private http: HttpClient) {
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

  cadastrarPrestador(nome: string, sobrenome: string, email: string,
    cpf: string, rg: string, nascimento: string, senha: string, categoria: number){
      return new Promise((resolve, reject)=>{
        var data = {
          nome : nome,
          sobrenome: sobrenome,
          email : email,
          cpf : cpf,
          rg : rg,
          nascimento : nascimento,
          senha: senha,
          categoria : categoria
        }
        this.http.post(this.api + "Prestadors",data)
          .subscribe((result:any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          })
      })
  }
}
