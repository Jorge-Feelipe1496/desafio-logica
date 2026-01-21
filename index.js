// Variáveis que armazenarão o nome do Heroi e seus pontos de XP
let nome = "Dagoberto";
let XP = 1999;
// Estrutura condicional if e else para definir o Nivel de Poder do Heroi
 if(XP >= 1000 && XP <= 1999){console.log(nome + " Seu Nivel de Poder é Ferro")}
else if(XP >= 1001 && XP <= 2000){console.log(nome + " Seu Nivel de Poder é Bronze")}
else if(XP >= 2001 && XP <= 5000){console.log(nome + " Seu Nivel de Poder  é Prata")}
else if(XP >= 5001 && XP <= 7000){console.log(nome + " Seu Nivel de Poder  é Ouro")}
else if(XP >= 7001 && XP <= 8000){console.log(nome + " Seu Nivel de Poder  é Platina")}
else if(XP >= 8001 && XP <= 9000){console.log(nome + " Seu Nivel de Poder  é Ascendente")}
else if(XP >= 9001 && XP <= 10000){console.log(nome + " Seu Nivel de Poder  é Imortal")}
else if(XP >= 10001){console.log(nome + "  é Radiante")}
// Mensagem de Saida para o Heroi 
console.log("Parabéns Héroi " + nome + ", você possui " + XP + " pontos de XP!" )