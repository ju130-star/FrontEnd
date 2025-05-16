import { Component } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/service/vaga.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss'],
})
export class PainelVagasComponent implements OnInit {
  public vaga: Vaga = new Vaga(0, '', '', '', 0);
  //rastrear od dados da api
  public vagas: Vaga[] = [];
  //armazenar as vagas da API

  constructor(private _vagasService: VagaService) {}
  //estabelece o serviço de busca no servidor

  ngOnInit(): void {
    this.listarVagas();
  }
  //listar todas as Vagas
  listarVagas() {
    // Lista as vagas do servidor usando o serviço 'VagaService'
    this._vagasService.getVagas().subscribe((retornaVaga) => {
      this.vagas = retornaVaga.map((item) => {
        // Mapeia os dados retornados para objetos 'Vaga'
        return new Vaga(
          item.id,
          item.nome,
          item.foto,
          item.descricao,
          item.salario
        );
      });
    });
  }

  //listar apenas uma unica vaga //put
  listarVagaUnica(vaga: Vaga) {
    this.vaga = vaga;
  }

  //cadastrar //post
  cadastrar() {
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0); //limpar formulario
        this.listarVagas(); //atualizar lista
      },
      (err) => {
        console.error('Erro ao cadastra', err); //Mostar erro do servidor
      }
    );
  }
  atualizar(id: number) {
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      () => {
        //após atualizar
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas();
      },
      (err) => {
        console.error('Erro ao Atualizar', err);
      }
    );
  }

  excluir(id: number) {
    this._vagasService.removerVaga(id).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas();
      },
      (err) => {
        console.error('Erro ao Excluir', err);
      }
    );
  }
}
