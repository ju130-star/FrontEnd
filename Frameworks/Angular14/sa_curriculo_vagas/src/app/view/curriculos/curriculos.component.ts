import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss']
})
export class CurriculosComponent  implements OnInit{
 public curriculos: Curriculo[] = [];

 constructor(private _curriculosService: CurriculoService) {}

 ngOnInit(): void {
 this.listarCurriculos();
 }

 listarCurriculos(){
  this._curriculosService.getCurriculos().subscribe((retornaCurriculo) =>{
    this.curriculos = retornaCurriculo.map(
      (item) => Curriculo.fromMap(item)
      );
     }
   );
 }
}
