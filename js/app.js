function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    
    let totalIngressos = document.getElementById(`qtd-${tipoIngresso}`);
    if (totalIngressos.textContent < quantidade) {
        alert('Quantidade de ingressos indiponíveis!')
    } else {
        totalIngressos.textContent -= quantidade;
    }
    
}