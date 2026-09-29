import { Component } from '@angular/core';

interface Produto{
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'media' | 'alta';
  concluida: boolean;
}

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: 'planejamento' | 'desenvolvimento' | 'testes' | 'concluido';
  entregue: boolean;
}
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

//=============================================================================================
 // Exercício 1
mensagemVisivel = true;

alternarMensagem() {
  this.mensagemVisivel = !this.mensagemVisivel;
}

// Exercício 2
usuarioLogado = false;

alternarLogin() {
  this.usuarioLogado = !this.usuarioLogado;
}

// Exercício 3
idadeDiretiva = 0;

aumentarIdade() {
  this.idadeDiretiva++;
}

diminuirIdade() {
  if (this.idadeDiretiva > 0) {
    this.idadeDiretiva--;
  }
}

// Exercício 4
nomeProdutoDiretiva = 'Teclado';
quantidadeEstoqueDiretiva = 5;

adicionarEstoqueDiretiva() {
  this.quantidadeEstoqueDiretiva++;
}

removerEstoqueDiretiva() {
  if (this.quantidadeEstoqueDiretiva > 0) {
    this.quantidadeEstoqueDiretiva--;
  }
}

// Exercício 5
nomes = [
  'Ana',
  'Carlos',
  'João',
  'Maria',
  'Pedro'
];

// Exercício 6
nomesIniciais = ['Ana', 'Carlos', 'João', 'Maria', 'Pedro'];

removerUltimoNome() {
  this.nomes.pop();
}

limparNomes() {
  this.nomes = [];
}

restaurarNomes() {
  this.nomes = [...this.nomesIniciais];
}

// Exercício 7
disciplinas = [
  'Banco de Dados',
  'Java',
  'Angular',
  'Redes',
  'Sistemas Operacionais',
  'Engenharia de Software'
];

// Exercício 8
produtosDiretiva: Produto[] = [
  { id: 1, nome: 'Teclado', preco: 150, quantidade: 5, promocao: true },
  { id: 2, nome: 'Mouse', preco: 80, quantidade: 10, promocao: false },
  { id: 3, nome: 'Monitor', preco: 900, quantidade: 2, promocao: true },
  { id: 4, nome: 'Headset', preco: 200, quantidade: 0, promocao: false },
  { id: 5, nome: 'Webcam', preco: 250, quantidade: 8, promocao: false }
];

alternarPromocao(produto: Produto) {
  produto.promocao = !produto.promocao;
}


// Exercício 11
somenteDisponiveis = false;

// Exercício 12
novoNomeProduto = '';
novaQuantidadeProduto: number | null = null;
mensagemCadastro = '';

cadastrarProduto() {
  if (
    this.novoNomeProduto.trim() === '' ||
    this.novaQuantidadeProduto === null ||
    this.novaQuantidadeProduto < 0
  ) {
    this.mensagemCadastro = 'Não foi possível realizar o cadastro.';
    return;
  }

  this.produtosDiretiva.push({
    id: Date.now(),
    nome: this.novoNomeProduto,
    preco: 0,
    quantidade: this.novaQuantidadeProduto,
    promocao: false
  });

  this.novoNomeProduto = '';
  this.novaQuantidadeProduto = null;
  this.mensagemCadastro = '';
}

excluirProduto(id: number) {
  this.produtosDiretiva = this.produtosDiretiva.filter(
    produto => produto.id !== id
  );
}

// Exercício 13
tarefas: Tarefa[] = [
  { id: 1, titulo: 'Criar tela de login', responsavel: 'Ana', prioridade: 'alta', concluida: true },
  { id: 2, titulo: 'Criar banco de dados', responsavel: 'Carlos', prioridade: 'alta', concluida: false },
  { id: 3, titulo: 'Criar página inicial', responsavel: 'João', prioridade: 'media', concluida: false },
  { id: 4, titulo: 'Testar sistema', responsavel: 'Maria', prioridade: 'media', concluida: true },
  { id: 5, titulo: 'Criar documentação', responsavel: 'Pedro', prioridade: 'baixa', concluida: false },
  { id: 6, titulo: 'Revisar projeto', responsavel: 'Ana', prioridade: 'baixa', concluida: false }
];

alterarSituacao(tarefa: Tarefa) {
  tarefa.concluida = !tarefa.concluida;
}

get tarefasConcluidas() {
  return this.tarefas.filter(tarefa => tarefa.concluida).length;
}

get tarefasPendentes() {
  return this.tarefas.filter(tarefa => !tarefa.concluida).length;
}

// Desafio Final
projetos: Projeto[] = [
  {
    id: 1,
    titulo: 'Sistema de Biblioteca',
    equipe: 'Equipe A',
    nota: 8.5,
    status: 'concluido',
    entregue: true
  },
  {
    id: 2,
    titulo: 'Sistema de Vendas',
    equipe: 'Equipe B',
    nota: 5.5,
    status: 'testes',
    entregue: false
  },
  {
    id: 3,
    titulo: 'Sistema Acadêmico',
    equipe: 'Equipe C',
    nota: null,
    status: 'desenvolvimento',
    entregue: false
  }
];

mostrarConcluidos = true;

alterarStatus(projeto: Projeto) {
  if (projeto.status === 'planejamento') {
    projeto.status = 'desenvolvimento';
  } else if (projeto.status === 'desenvolvimento') {
    projeto.status = 'testes';
  } else if (projeto.status === 'testes') {
    projeto.status = 'concluido';
  } else {
    projeto.status = 'planejamento';
  }
}

get totalConcluidos() {
  return this.projetos.filter(
    projeto => projeto.status === 'concluido'
  ).length;
}
}