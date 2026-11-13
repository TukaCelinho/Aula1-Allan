function calcularNota(nota) {
    if (nota >= 7.0) {
        return "APROVADO";
    } else if (nota >= 5.0 && nota < 7.0) {
        return "RECUPERAÇÃO";
    } else {
        return "REPROVADO";
    }
}

if (calcularNota(8.5) === "APROVADO") {
    console.log("Teste 1 (8.5): APROVADO");
} else {
    console.log("Teste 1 (8.5): Falhou");
}

if (calcularNota(6.0) === "RECUPERAÇÃO") {
    console.log("Teste 2 (6.0): RECUPERAÇÃO");
} else {
    console.log("Teste 2 (6.0): Falhou");
}

if (calcularNota(3.0) === "REPROVADO") {
    console.log("Teste 3 (3.0): REPROVADO");
} else {
    console.log("Teste 3 (3.0): Falhou");
}