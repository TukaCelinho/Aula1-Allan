function verificarFreteGratis(valor) {
    return valor >= 150;
}

if (verificarFreteGratis(200) === true) {
    console.log("Teste 1 (R$ 200): Passou - Frete grátis");
} else {
    console.log("Teste 1 (R$ 200): Falhou");
}

if (verificarFreteGratis(80) === false) {
    console.log("Teste 2 (R$ 80): Passou - Sem frete grátis");
} else {
    console.log("Teste 2 (R$ 80): Falhou");
}

if (verificarFreteGratis(150) === true) {
    console.log("Teste 3 (R$ 150): Passou - Frete grátis");
} else {
    console.log("Teste 3 (R$ 150): Falhou");
}