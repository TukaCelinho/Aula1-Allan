function verificarServidor(temp) {
    if (temp > 80) {
        return "PERIGO";
    } else if (temp >= 50 && temp <= 80) {
        return "ATENÇÃO";
    } else {
        return "NORMAL";
    }
}

if (verificarServidor(35) === "NORMAL") {
    console.log("Teste 1 (35°C): NORMAL");
} else {
    console.log("Teste 1 (35°C): Falhou");
}

if (verificarServidor(65) === "ATENÇÃO") {
    console.log("Teste 2 (65°C): ATENÇÃO");
} else {
    console.log("Teste 2 (65°C): Falhou");
}

if (verificarServidor(90) === "PERIGO") {
    console.log("Teste 3 (90°C): PERIGO");
} else {
    console.log("Teste 3 (90°C): Falhou");
}