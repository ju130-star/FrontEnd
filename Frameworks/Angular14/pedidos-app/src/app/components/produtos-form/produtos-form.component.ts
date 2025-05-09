import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss']
})
export class ProdutosFormComponent {
nome : string = "";
preco : number = 0;

constructor(private dadosService: DadosService){}

//método
adicionarProduto(){
  const produto = new Produto(this.dadosService.getProdutos().length+1, this.nome, this.preco);
 this.dadosService.adicionarProduto(produto);
 this.nome="";
 this.preco=0;
}
}
