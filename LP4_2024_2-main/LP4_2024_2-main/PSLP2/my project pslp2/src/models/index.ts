class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

const pessoa = new Pessoa("João", 25);
console.log(pessoa);

class Pessoas {
  private nome: string;
  private idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  getNome(): string {
    return this.nome;
  }
  getIdade(): number {
    return this.idade;
  }
}

const pessoas = new Pessoa("João", 25);
console.log(pessoa.getNome()); // João
console.log(pessoa.getIdade()); // 25
