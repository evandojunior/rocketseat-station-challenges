/**
* Desafio 01:
* Crie uma função que dado o objeto, imprima o valor da variavel exemplo
*/

var endereco = {
 rua: "Rua dos Pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"
};

var example = "O usuário mora em São Paulo / SP, no bairro Centro, na rua \"Rua dos Pinheiros\" com nº 1293."

function exibeEndereco(endereco){
  return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`
}

console.log(example)
console.log(exibeEndereco(endereco))
example == exibeEndereco(endereco) ? console.log('Mission Complete') : console.log('Houston we have a problem!');
