let nome = "Aslam"
let qtdXP = 9980

switch(true){ //switch(true) === compara o resultado de cada case. quando a condição for verdadeira, ele executa o bloco correspondente
    case qtdXP < 1000:
        qtdXP = "Ferro"
        console.log(`"O Herói de nome ${nome} está no nível de ${qtdXP}"`);
        break;
    case qtdXP > 1001 && qtdXP < 2000:
        qtdXP = "Bronze"
        console.log(`"O Herói de nome ${nome} está no nível de ${qtdXP}"`);
        break;
    case qtdXP > 2001 && qtdXP < 5000:
        qtdXP = "Prata"
        console.log(`"O Herói de nome ${nome} está no nível de ${qtdXP}"`);
        break;
    case qtdXP > 5001 && qtdXP < 7000:
        qtdXP = "Ouro"
        console.log(`"O Herói de nome ${nome} está no nível de ${qtdXP}"`);
        break;
    case qtdXP > 7001 && qtdXP < 8000:
        qtdXP = "Platina"
        console.log(`"O Herói de nome ${nome} está no nível de ${qtdXP}"`);
        break;
    case qtdXP > 8001 && qtdXP < 9000:
        qtdXP = "Ascendente"
        console.log(`"O Herói de nome ${nome} está no nível de ${qtdXP}"`);
        break;
    case qtdXP > 9001 && qtdXP < 10000:
        qtdXP = "Imortal"
        console.log(`"O Herói de nome ${nome} está no nível de ${qtdXP}"`);
        break;
    case qtdXP >= 10001:
        qtdXP = "Radiante"
        console.log(`"O Herói de nome ${nome} está no nível de ${qtdXP}"`);
        break;
    default:
        qtdXP = "Absurdo"
        console.log(`"O Herói de nome ${nome} está no nível de ${qtdXP}"`);
}
