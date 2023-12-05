import { Injectable } from '@angular/core';
import { Ifuncionarios } from './ifuncionarios';
import {HttpClient} from '@angular/common/http'
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private readonly API ="http://localhost:8080/funcionarios";

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Ifuncionarios[]>(this.API);
  }

  listarPorId(id:object) {
    return this.http.get<Ifuncionarios>(`${this.API}/${id}`);
  }

  criar(funcionarios:object) {
    return this.http.post(this.API, funcionarios).pipe(take(1));
  }

  atualizar(funcionarios:any) {
    return this.http.put(`${this.API}/${funcionarios.id}`, funcionarios).pipe(take(1));
  }

  excluir(id:any) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
