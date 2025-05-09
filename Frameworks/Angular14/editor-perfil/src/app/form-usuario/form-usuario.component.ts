import { Component } from '@angular/core';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {

  //atributos
 nome: string = "";
 email: string = "";
 telefone: string = "";
 genero: string = "";
 idade: number | null = null;
 profissao: string = "";

 //métodos
 limparDados(){
  this.nome = "";
  this.email = "";
  this.telefone = "";
  this.genero = "";
  this.idade = null;
  this.profissao = "";
 }

 //método para validar os campos do formulário
  validarFormulario(): string[] {
   const erro:string[] = []
   //nome
   if (!this.nome || !/^[A-ZÁ-Ú][a-zá-ú\s]+$/.test(this.nome)) {
     alert('Nome é obrigatório e deve começar com letra maiúscula.');
     return erro;
   }
   //email
   if (!this.email || !this.email.includes('@')) {
     alert('Email é obrigatório e deve conter "@"');
     return erro;
   }
   //telefone
   if (!this.telefone || this.telefone.length < 9) {
     alert('Telefone é obrigatório e deve ter pelo menos 9 dígitos.');
     return erro;
   }
   //genero
   if (!this.genero) {
     alert('Por favor, selecione um gênero.');
     return erro;
   }
   //idade
   if (!this.idade || this.idade <= 18) {
     alert('Idade deve ser maior que 18.');
     return erro;
   }
   //profissão
   if (!this.profissao) {
     alert('Profissão é obrigatória.');
     return erro;
   }
   return erro;
  }

  // validar formulario
  enviarFormulario(){
    const erros = this.validarFormulario();

    if(erros.length>0){
      alert("Erros no Formulário:\n" + erros.join("\n"));
      return;
    }
    this.limparDados();
    alert("Formulário Enviado com sucesso");
  }

}
