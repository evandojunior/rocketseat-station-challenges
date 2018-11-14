/**
* Desafio 03:
* Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
* e retorna um booleano true/false caso exista ou não.
*
*/


function hasSkill(skills, search){
  return skills.indexOf(search) !== -1
}

var skills = ["Javascript", "ReactJS", "React Native"];

console.log(hasSkill(skills, 'Javascript'));
