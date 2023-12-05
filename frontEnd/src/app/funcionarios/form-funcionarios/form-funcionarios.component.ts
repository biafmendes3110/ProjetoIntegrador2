import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'
import { FuncionariosService } from '../service/funcionarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap} from 'rxjs';
import { Ifuncionarios } from '../service/ifuncionarios';

@Component({
  selector: 'app-form-funcionarios',
  templateUrl: './form-funcionarios.component.html',
  styleUrls: ['./form-funcionarios.component.scss']
})

export class FormFuncionariosComponent implements OnInit{
  
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    cargo: new FormControl(''),
    salario: new FormControl(),
    areaAtuacao: new FormControl(''),
    localTrabalho: new FormControl(''),
  })

  constructor(
    private service: FuncionariosService,
    private route: ActivatedRoute,
    private router: Router
    ){ }

    ngOnInit() { this.ListarPorId(); }

   Salvar(){
    if(this.form.value.id){
      this.service.atualizar(this.form.value).subscribe(
        success => {
          alert("Funcionarios atualizado com sucesso!")
          this.router.navigate(['']);
        },
        Error => alert("Erro ao atualizar o funcionario ")
      );
    }

    else{
      this.service.criar(this.form.value).subscribe(
        success => {
          alert("Funcionario cadastrado com sucesso!");
          this.router.navigate(['']);
        },
        Error => alert("Erro ao cadastrar o funcionario")
      );
    }
    this.form.reset();
   }

   ListarPorId(){
    this.route.params
    .pipe(
      map((params: any) => params['id']),
      switchMap(id => this.service.listarPorId(id))

    ).subscribe(funcionarios => this.atualizarForm(funcionarios));
   }

   atualizarForm(funcionarios: Ifuncionarios){
    this.form.patchValue({
      id: funcionarios.id,
      nome: funcionarios.nome,
      cargo: funcionarios.cargo,
      salario: funcionarios.salario,
      areaAtuacao: funcionarios.areaAtuacao,
      localTrabalho: funcionarios.localTrabalho,
    });
   }

   Cancelar(){
    this.form.reset();
    console.log('Cancelado');
   }

   
}