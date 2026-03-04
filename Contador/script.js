function contar() {
    
    var inicio = Number(document.getElementById('inicio').value);
    var fim = Number(document.getElementById('fim').value);
    var incremento = Number(document.getElementById('incremento').value);

    if (isNaN(inicio) || isNaN(fim) || isNaN(incremento)) {
        alert('Por favor, preencha todos os campos.');
        return;
    } 
    else if (incremento <= 0) {
        alert('O valor de incremento deve ser maior que zero.');
        return;
    }
    else if (inicio < fim) {
        var numeros = [];
        var resultado = document.getElementById('resultado');
        texto = 'Contando progressivamente... <br>';
        for (var i = inicio; i <= fim; i += incremento) {
            numeros.push(i);
        }
        var mensagem = 'Contando progressivamente... <br>';
        mensagem += numeros.join(' 👉 ') + ' 🏁';

        resultado.innerHTML = mensagem;
    } else if (inicio > fim) {
        var numeros = [];
        var resultado = document.getElementById('resultado');
        for (var i = inicio; i >= fim; i -= incremento) {
            numeros.push(i);
        }
        var mensagem = 'Contando regressivamente... <br>';
        mensagem += numeros.join(' 👉 ') + ' 🏁';
        resultado.innerHTML = mensagem;    
    } else {
        alert('O valor de início e fim não podem ser iguais.');
    }

}

function limpar() {
    document.getElementById('inicio').value = '';
    document.getElementById('fim').value = '';
    document.getElementById('incremento').value = '';
    document.getElementById('resultado').innerHTML = '';
}