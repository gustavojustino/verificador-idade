
function calcular() {
const aniversario = window.document.getElementById('txtAniversario')
const dataniver = Number(aniversario.value)

const resposta = window.document.getElementById('resp')

const anoAtual = new Date()
anoatual = anoAtual.getFullYear()

idade = anoatual - dataniver

var sexo = window.document.getElementsByName('radsex')
var genero = ' '

if (sexo[0].checked) {
    genero = "Homem"
} else if (sexo[1].checked) {
    genero = "Mulher"
}

if (dataniver > anoatual || dataniver <= 0) {
    resposta.innerHTML = `ERRO: DADOS INCORRETOS OU NÃO PREENCHIDOS`
} else {
    resposta.innerHTML = `DETECTADO: ${genero} com idade de ${idade} anos`}
}
