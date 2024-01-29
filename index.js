/*# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/


let nome = "Vlaldemir";
let xp = 10004;
let nivelDoJogador = 0;

if (xp <= 1000) {
    nivelDoJogador = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivelDoJogador = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivelDoJogador = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivelDoJogador = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivelDoJogador = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivelDoJogador = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivelDoJogador = "Imortal";
} else if (xp >= 10001) {
    nivelDoJogador = "Radiante";
}
console.log(`O Heróis de nome ${nome} está no nível ${nivelDoJogador}`);