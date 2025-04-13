function alterarNumero(delta) {
    const input = document.getElementById('meuNumero');
    input.value = parseInt(input.value || 0) + delta;
  }