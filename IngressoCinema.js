/*
Escreva um algoritmo que verifique a idade e informe se a pessoa vai pagar meia entrada ou inteira
Entre 16 e 18 anos = meia entrada
Entre 19 e 60 anos = inteira
Maior que 60 anos = meia entrada

*/

let idade = 20;

let verificar = (idade >= 16 && idade <=18) || (idade > 60) ?
   'meia entrada'
   :
   'entrada inteira';

   console.log(`Você irá pagar ${verificar}`);


