let vitorias = 51; // Exemplo de número de vitórias

function calcularRank(vitorias) {
  if (vitorias <= 10) {
    console.log("Se vitórias for menor ou igual a 10 = Ferro");
  } else if (vitorias >= 11 && vitorias <= 20) {
    console.log("Se vitórias for entre 11 e 20 = Bronze");
  } else if (vitorias >= 21 && vitorias <= 50) {
    console.log("Se vitórias for entre 21 e 50 = Prata");
  } else {
    console.log("Mais de 50 vitórias = Ouro");
  }
}

// Chamada da função
calcularRank(vitorias);
