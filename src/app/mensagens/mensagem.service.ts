import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private toast: ToastController) { }

  async loginSucesso() {
    const toast = await this.toast.create({
      message: "Login efetuado com sucesso",
      duration: 3000,
      color: "success",
      position: "top"
    });
    toast.present();
  }

  async cadastroSucesso() {
    const toast = await this.toast.create({
      message: "Cadastro efetuado com sucesso",
      duration: 3000,
      color: "success",
      position: "top"
    });
    toast.present();
  }

  async cadastroErro() {
    const toast = await this.toast.create({
      message: "Cadastro não efetuado",
      duration: 3000,
      color: "danger",
      position: "top"
    });
    toast.present();
  }

}
