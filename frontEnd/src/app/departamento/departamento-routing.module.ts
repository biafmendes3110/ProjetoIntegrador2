import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListardepartamentoComponent } from './listardepartamento/listardepartamento.component';
import { FormdepartamentoComponent } from './form-departamento/form-departamento.component';


const routes: Routes = [
  {path:"", component: ListardepartamentoComponent},
  {path:"novo", component: FormdepartamentoComponent},
  {path:"editar/:id", component: FormdepartamentoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule { }