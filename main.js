function Pessoa(nome , idade , nacionalidade ,) {
    this.nome = nome
    this.idade = idade
    this.nacionalidade = nacionalidade
}

function Estudante(nome , idade , nacionalidade , anoLetivo)  {
    Pessoa.call(this , nome , idade , nacionalidade)

    this.anoLetivo = anoLetivo
}

function Trabalhador(nome , idade , nacionalidade , cargo) {
    Pessoa.call(this , nome , idade , nacionalidade)

    this.cargo = cargo
}

const estudante1 = new Estudante("João" , 14 , "Brasileito" , "9 ano")
const trabalhador1 = new Trabalhador('Jorge' , 32 , 'Brasilerio' , 'dev-full-stack')
const trabalhador2 = new Trabalhador('Bruno' , 28 , 'Brasilerio' , 'professor')

console.log(estudante1)
console.log(trabalhador1)
console.log(trabalhador2)