function calcularNivel(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel = "";

    if (saldo < 10) {
        nivel = "Ferro";
    } else if (saldo >= 10 && saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        nivel = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

function calcularSaldoRankeadas(vitorias, derrotas) {
    let nivel = calcularNivel(vitorias, derrotas);

    return `O jogador tem um saldo de ${vitorias} vitórias e ${derrotas} derrotas e está no nível ${nivel}.`;
}

let resultado = calcularSaldoRankeadas(251, 150);
console.log(resultado);
