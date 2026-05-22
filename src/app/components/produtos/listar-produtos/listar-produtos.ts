import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  standalone: false,
  templateUrl: './listar-produtos.html',
  styleUrl: './listar-produtos.css',
})
export class ListarProdutos {
  listarStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listarNumeros: number[] = [15, 15.18, 100];
  listaProdutos: any[] = [
    { nome: 'Curso de Angular', precoProduto: 35.56, validade: '2021-12-31', id: 1 },
    { nome: 'Curso de Ionic', precoProduto: 50, validade: '2021-12-31', id: 2 },
    { id: 3, nome: 'Curso de Ionic Avançado', precoProduto: 50, validade: '2021-12-31' },
  ];
  
  objetoModelo = {
    nome: 'Guilherme',
    idade: 18,
    altura: 1.69,
    graduado: false
  };

  constructor() {
    for (let item of this.listarStrings) {
      console.log(item);
    }
    for (const item of this.listarNumeros) {
      console.log(item);
    }
    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);
  };

}
