import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFornecedorComponent } from './fornecedor/form-fornecedor/form-fornecedor.component';
import { FormClientesComponent } from './clientes/form-clientes/form-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormdepartamentoComponent } from './departamento/form-departamento/form-departamento.component';
import { FormEmpresaComponent } from './empresa/form-empresa/form-empresa.component';
import { FormFuncionariosComponent } from './funcionarios/form-funcionarios/form-funcionarios.component';
import { FormProjetoComponent } from './projetos/form-projeto/form-projeto.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFornecedorComponent,
    FormClientesComponent,
    FormdepartamentoComponent,
    FormEmpresaComponent,
    FormFuncionariosComponent,
    FormProjetoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
