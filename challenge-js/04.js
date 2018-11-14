/**
* Desafio 04:
* Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é.
*
*/

function showUserLevel(years){
  if( years >= 0 && years <= 1 ) return "Iniciante"
  if( years >= 1 && years <= 3 ) return "Intermediário"
  if( years >= 3 && years <= 6 ) return "Avançado"
  if( years >= 7 ) return "Jedi Master"
}

console.log(showUserLevel(10))
