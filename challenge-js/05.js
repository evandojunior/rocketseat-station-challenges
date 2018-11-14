/**
* Desafio 5
* Dado o seguinte vetor de objetos,
* Escreva uma função que produza o seguinte resultado:
*/

var example = "O Diego possui as habilidades: Javascript, ReactJS, Redux\
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir"

var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];

function showUserSkills(usuarios){
    usuarios.filter(function(usuario){
      console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join()}`)
    })
}

showUserSkills(usuarios)
