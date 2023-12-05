import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { ListarfuncionariosComponent } from './listarfuncionarios/listarfuncionarios.component';



@NgModule({
  declarations: [
    ListarfuncionariosComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule
  ]
})
export class FuncionariosModule { }
