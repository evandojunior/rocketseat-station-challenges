/**
* Desafio 02:
* Crie uma função que dado um intervalo (entre x e y) exiba todos número pares.
*/


function showPairNumbers(x, y){
     if(x <= y){
      while (x <= y) {
        if(x % 2 == 0){
          console.log(x)
        }
        x++;
      }
    } else {
      while (x >= y) {
        if(x % 2 == 0){
          console.log(x)
        }
        x--;
    }
  }
}

showPairNumbers(10, 10);
