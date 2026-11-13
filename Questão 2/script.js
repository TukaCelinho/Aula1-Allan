function validarSenha(senha) {
    if (senha.length >= 6) {
        return "OK";
    } else {
        return "CURTA";
    }
}

if (validarSenha("senhasegura123") === "OK") {
    console.log("Teste 1: Senha válida");
} else {
    console.log("Teste 1: Erro na validação");
}

if (validarSenha("123") === "CURTA") {
    console.log("Teste 2: Senha curta detectada");
} else {
    console.log("Teste 2: Erro na validação");
}

if (validarSenha("abc123") === "OK") {
    console.log("Teste 3: Senha válida (limite exato)");
} else {
    console.log("Teste 3: Erro na validação");
}