import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarprojetoComponent } from './listarprojeto/listarprojeto.component';
import { ProjetoRoutingModule } from './projeto-routing.module';


@NgModule({
  declarations: [
    ListarprojetoComponent

  ],
  imports: [
    CommonModule,
    ProjetoRoutingModule
  ]
})
export class ProjetoModule { }
