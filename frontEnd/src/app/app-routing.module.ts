import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { ClientesModule } from './clientes/clientes.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { EmpresaModule } from './empresa/empresa.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { ProjetoModule } from './projetos/projeto.module';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:''},
  {path:'fornecedores', loadChildren:()=> FornecedorModule},
  {path:'clientes', loadChildren:()=> ClientesModule},
  {path:'departamento', loadChildren:()=> DepartamentoModule},
  {path:'empresas', loadChildren:()=> EmpresaModule},
  {path:'funcionarios', loadChildren:()=> FuncionariosModule},
  {path:'projetos', loadChildren:()=> ProjetoModule},
  {path:'inicio', component:InicioComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
