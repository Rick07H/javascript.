let numeros = [];

function adicionar() {
    let numero = Number(document.getElementById('numero').value);
    let select  = document.getElementById('lista');

    if (!isNaN(numero)) {
        if (numeros.includes(numero.value)) {
            alert('Número já adicionado. Por favor, insira um número diferente.');
            return;
        } else if (numero < 1 || numero > 100) {
            alert('Número fora do intervalo permitido. Insira um número entre 1 e 100.');
            return;
        }
        else {
            numeros.push(numero);
            select.innerHTML += `<option value="${numero}">Valor ${numero} adicionado.</option>`;
            numero.value = '';
        }
    } else {
        alert('Por favor, insira um número válido.');
    }
}

function finalizar() {
    let resultado = document.getElementById('resultado');
    if (numeros.length === 0) {
        alert('Adicione números antes de finalizar.');
        return;
    }

    let total = numeros.length;
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);
    let soma = numeros.reduce((acc, val) => acc + Number(val), 0);
    let media = soma / total;

    resultado.innerHTML = `
        <p>Temos um total de ${total} números</p>
        <p>O maior valor informado foi ${maior}</p>
        <p>O menor valor informado foi ${menor}</p>
        <p>A soma dos números deu ${soma}</p>
        <p>A média dos números é ${media.toFixed(0)}</p>
    `;
}