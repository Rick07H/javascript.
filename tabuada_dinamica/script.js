function gerarTabuada() {
    const numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero)) {
        alert('Por favor, insira um número válido.');
        return;
    } else {
        const elementoResultado = document.getElementById('resultado');
        const elementoTabuada = document.getElementById('tabuada');
        elementoTabuada.innerHTML = ''; // Limpa resultados anteriores
        elementoTabuada.scrollTop = 0;        

        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i;
            const linha = document.createElement('option');
            linha.textContent = `${numero} x ${i} = ${resultado}`;
            elementoTabuada.appendChild(linha);
        }
        elementoResultado.style.display = 'block';
    }
}