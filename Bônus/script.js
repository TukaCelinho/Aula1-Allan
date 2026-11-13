function calcularDescontoCupom(valor) {
  // Correção: usar >= para incluir o valor exato de 100
  if (valor >= 100) { 
    return valor - 20; 
  } else {
    return valor;
  }
}