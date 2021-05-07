import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //usuario: string ="";
  nome: string="";
  senha: string =""; 
  constructor(private router: Router, private provider: Post , private toastCtrl: ToastController) //toastcontroler
  { }

  ngOnInit() {
  }

  async login(){
    if(this.nome==''){
      const toast = await this.toastCtrl.create({
        message: 'Preencha o nome de Usuário',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }
    if(this.senha==''){
      const toast = await this.toastCtrl.create({
        message: "Preencha a senha",
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }
    let dados = {
      requisicao: 'login',
      nome : this.nome, 
      senha: this.senha
    };
  
    this.provider.dadosApi(dados,'api.php').subscribe(async data => {
      //debugger;
     let dados = data['result'];
     // var alerta = data['msg'];//? msg !! 
      if(data['success']){// 'success'
       if(dados['nivel']=='admin'){ //nivel=tipo de consulta
          this.router.navigate(['/folder']) //se login for efetuado vai para folder
        }
        else if(dados['nivel']=='aluno'){ //aluno pode ser usuario
         // this.router.navigate(['/home-aluno'])
        }
        else {// deixe sua imaginação fluir aqui mesmo
          //this.router.navigate(['/cursos'])
        }
       
        //this.router.navigate(['/folder']);
        const toast = await this.toastCtrl.create({
          message: "Login efetuado com sucesso!",
          color: 'success'
        });
        toast.present();
        this.nome = "";
        this.senha="";
        // teste de retorno de dados....
        console.log(data);
      }
      else{
        const toast = await this.toastCtrl.create({
          message: data['msg'], //alerta,
          duration: 2000,
          color: 'danger'    
        });
        toast.present();
      }
      // lembrete: criar tabela com consulta com os campos nome, email, senha, tipo consulta, telefone 

    });
  
  
  
  
  
  
  
  
  
  
  }
}