import { Component } from '@angular/core';
@Component({
  selector: 'app-cad-livros',
  standalone: false,
  templateUrl: './cad-livros.html',
  styleUrl: './cad-livros.css',
})
export class CadLivros {

  // Exercício 1
  nome = 'Carlos';
  idade = 25;
  curso = 'Sistemas de Informação';

  // Exercício 2
  produto = 'Teclado';
  preco = 150;
  quantidade = 3;

  // Exercício 3
  imagemProduto = '/teclado.jpeg';
  descricaoImagem = 'Imagem de teclado';

  //exercicio 4
  formularioValido = true;

  //exercicio 5
  curtidas = 0;

  curtir(){
    this.curtidas++;
  }

  //exercicio 6
  quantidadeContador = 0;

  aumentar() {
    this.quantidadeContador++;
  }

  diminuir(){
    if(this.quantidadeContador > 0){
      this.quantidadeContador--;
    }
  }

  //exercicio 7 
  nomeTempoReal = "Thiago";

  //exercicio 8
  produtoCadastro = "Mouse Gamer";
  precoCadastro = 150;
  quantidadeCadastro = 2;

  //exercicio 9
  nomeProdutoEstoque = "Teclado";
  estoque = 0;

  aumentarEstoque(){
    this.estoque++;
  }

  diminuirEstoque(){
    if(this.estoque > 0){
      this.estoque--;
    }
  }

  //exercicio 10
  usuario = "";
  senha = "";
  mensagemLogin = "";

  entrar(){
    this.mensagemLogin = "Bem vindo, " + this.usuario + "!";
  }

  //exercicio 11
  produtoCarrinho = "Mouse Gamer";
  precoCarrinho = 120;
  quantidadeCarrinho = 1;
  mensagemCarrinho = '';

  aumentarQuantidadeCarrinho(){
    this.quantidadeCarrinho++;
  }

  diminuirQuantidadeCarrinho(){
    if(this.quantidadeCarrinho > 1){
      this.quantidadeCarrinho--;
    }
  }

  adicionarCarrinho(){
    this.mensagemCarrinho = this.quantidadeCarrinho + 'unidade(s) de ' + this.produtoCarrinho + 'adicionada(s) ao carrinho!';
  }

  //exercicio 11
  nomeAluno = "";
  quantidadeDisciplinas = 1;
  mensagemMatricula = "";

  aumentarDisciplinas(){
    this.quantidadeDisciplinas++;
  }

  diminuirDisciplinas(){
    if(this.quantidadeDisciplinas > 1){
      this;this.quantidadeDisciplinas--;
    }
  }

  realizarMatricula(){
    this.mensagemMatricula = 'Matrícula realizada para ' + this.nomeAluno + ' em ' + this.quantidadeDisciplinas + ' disciplina(s)';
  }
}