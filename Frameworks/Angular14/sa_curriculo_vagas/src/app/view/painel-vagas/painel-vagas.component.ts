import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/service/vaga.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss'],
})
export class PainelVagasComponent implements OnInit {
//atributos
public vaga: Vaga = new Vaga(0, "","","",0); //Rastrear os dados
//vetor para armazenar as info do DB
public vagas:Vaga[] = [];

constructor(private _vagasService: VagaService){}

  ngOnInit(): void {
 this.listarVagas();
  }

  listarVagas(){
    this._vagasService.getVagas().subscribe(
      (retornoVaga) => {this.vagas = retornoVaga.map(
        (item)=> Vaga.fromMap(item)
      );}
    );
  }
  //listar vaga unica
  listarVagaUnica(vaga: Vaga){
    this.vaga = vaga
  }

  //cadastarr nova vaga
  cadastrar() {
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
    () => {
      this.vaga = new Vaga(0, "","","",0);
      this.listarVagas();
    },
    (err) => {console.error("Erro ao Cadastrar",err);}
    );
  }

  // atualizar nova Vaga
  atualizar(id:number){
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
()=> {
  this.vaga = new Vaga(0, '', '', '', 0);
  this.listarVagas
},
(err) =>{console.log("Erro ao atualizar",err);}
    );
  }
  //deletar vaga
  excluir(id:number){
    this._vagasService.removerVaga(id).subscribe(
      () => { this.listarVagas();},
      (err) => {console.log("Erro ao Deletar",err)}
    );
  }


}

    