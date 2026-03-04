function verificarMulta() {
    const velocidade = document.getElementById('velocidade').value;
    const divPrincipal = document.getElementById('principal');

    divPrincipal.innerHTML = `Sua velocidade atual é de ${velocidade} km/h. `;

    if (velocidade > 80) {
        divPrincipal.innerHTML += `<p style="color: red;">Multa aplicada! Velocidade acima do permitido.</p>`;
    } else if (velocidade <= 30) {
        divPrincipal.innerHTML += `<p style="color: red;">Multa aplicada! Velocidade abaixo do permitido.</p>`;
    } else {
        divPrincipal.innerHTML += `<p style="color: green;">Velocidade dentro do limite permitido. Sem multa.</p>`;
    }

    divPrincipal.innerHTML += 'Dirija sempre com segurança!';
}