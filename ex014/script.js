function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagen')
var data = new Date()
var agora = data.getHours()
msg.innerHTML = `Agora são ${agora} horas.`

if (agora >= 0 && agora < 12) {
    //BOM DIA!
    document.body.style.background = '#e2cd9f'
} else if (agora >= 12 && agora < 18) {
    //BOA TARDE!
    document.body.style.background = '#b9846f'
} else {
    //BOA NOITE!
    document.body.style.background = '#515154'
}
}