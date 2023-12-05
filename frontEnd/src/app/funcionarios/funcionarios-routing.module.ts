import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarfuncionariosComponent } from '../funcionarios/listarfuncionarios/listarfuncionarios.component';
import { FormFuncionariosComponent } from '../funcionarios/form-funcionarios/form-funcionarios.component';

const routes: Routes = [
  {path:"", component: ListarfuncionariosComponent},
  {path:"novo", component: FormFuncionariosComponent},
  {path:"editar/:id", component: FormFuncionariosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
