import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculosComponent } from './view/curriculos/curriculos.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { PainelCurriculosComponent } from './view/painel-curriculos/painel-curriculos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'curriculos', component: CurriculosComponent },
  { path: 'vagas', component: VagasComponent },
  { path: "painel-vagas", component: PainelVagasComponent},
  { path: "painel-curriculos", component: PainelCurriculosComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
