import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
public nomeProduto: string = "Curso de Angular";
      anuncio: string = `O ${this.nomeProduto} está em promoção`;
      idProduto: number = 3;
      precoProduto: number = 2.51;
      promocao: boolean = true;
      foto: string = "img/crud.png";
      dataValidade = '2021-12-31'

      testeVariaveis(): void{
        //variáveis de string com concatenação
        //this.anuncio + `O` + this.nomeProduto + `está em promoção`;
        console.log(`Nome do Produto: `, this.nomeProduto);
        console.log(`Anuncio: `,this.anuncio);
        console.log(`ID: `, this.idProduto);
        console.log(`Preço: `, this.precoProduto);
        console.log(`Promoção: `, this.promocao);


      }
}
