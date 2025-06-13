import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.scss'],
})
export class PainelCurriculosComponent implements OnInit {
  // Objeto de rastreio
  public curriculo: Curriculo = new Curriculo(0, '', 0, '', '', '', '', '', '', 0);

  // Vetor de currículos
  public curriculos: Curriculo[] = [];

  constructor(private _curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos() {
    this._curriculoService.getCurriculos().subscribe((retorno) => {
      this.curriculos = retorno.map((item) => Curriculo.fromMap(item));
    });
  }

  listarCurriculoUnico(curriculo: Curriculo) {
    this.curriculo = curriculo;
  }

  camposPreenchidos(): boolean {
    const {
      nome,
      idade,
      estadoCivil,
      email,
      telefone,
      formacao,
      experiencia,
      habilidades,
    } = this.curriculo;
    return (
      nome.trim() !== '' &&
      idade > 0 &&
      estadoCivil.trim() !== '' &&
      email.trim() !== '' &&
      telefone.trim() !== '' &&
      formacao.trim() !== '' &&
      experiencia.trim() !== '' &&
      habilidades.trim() !== ''
    );
  }

  cadastrar() {
    if (!this.camposPreenchidos()) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    this._curriculoService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', 0, '', '', '', '', '', '', 0);
        this.listarCurriculos();
      },
      (err) => {
        console.error('Erro ao cadastrar currículo', err);
      }
    );
  }

  atualizar(id: number) {
    this._curriculoService.atualizarCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', 0, '', '', '', '', '', '', 0);
        this.listarCurriculos();
      },
      (err) => {
        console.error('Erro ao atualizar currículo', err);
      }
    );
  }

  excluir(id: number) {
    this._curriculoService.removerCurriculo(id).subscribe(
      () => {
        this.listarCurriculos();
      },
      (err) => {
        console.error('Erro ao excluir currículo', err);
      }
    );
  }
}
