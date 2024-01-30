/* # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/

function x (vitoria, derrota){
    let resultado = vitoria - derrota;
    return resultado;
    }

function rank() {
    let resultadoDoRank = x(77,44);

    if (resultadoDoRank <= 10){
        nivel = "Ferro;"
    } else if (resultadoDoRank >= 11 && resultadoDoRank <= 20){
        nivel = "Bronze"
    } else if (resultadoDoRank >= 21 && resultadoDoRank <= 50){
        nivel = "Prata"
    } else if (resultadoDoRank >= 51 && resultadoDoRank <= 80){
        nivel = "Ouro"
    } else if (resultadoDoRank >= 81 && resultadoDoRank <= 90){
        nivel = "Diamante"
    } else if (resultadoDoRank >= 91 && resultadoDoRank <= 100){
        nivel = "Lendário"
    }else if (resultadoDoRank >= 101){
        nivel = "Imortal"
    }

    return `O Herói tem saldo de ${resultadoDoRank} e está no nível de ${nivel} `
}

console.log(rank());