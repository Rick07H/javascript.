function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var ano_usuario = Number(document.getElementById('ano').value)

    if (ano_usuario.toString().length == 0 || ano_usuario > ano || ano_usuario < 1926 ) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
            var idade = ano - ano_usuario
            var genero = document.getElementsByName('genero')
            var resultado = document.getElementById('resultado')

            if (genero[0].checked) {
                var genero = 'Homem';
                resultado.innerHTML = `Você é um ${genero} e possui ${idade} anos.`
            } else {
                var genero = 'Mulher';
                resultado.innerHTML = `Você é uma ${genero} e possui ${idade} anos.`
            }

    }
}