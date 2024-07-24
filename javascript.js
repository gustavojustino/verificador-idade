window.onload = function() {
    document.getElementById('loader').style.display = 'none';
}

function calc() {
const aniversario = document.getElementById('txtAniversario');
const dataniver = Number(aniversario.value);

const resp = document.getElementById('resp');

const anoAtual = new Date().getFullYear();

idade = anoAtual - dataniver;

var sexo = document.getElementsByName('radsex');
var genero = '';

if (sexo[0].checked) {
    genero = "masculino"
} else if (sexo[1].checked) {
    genero = "femenino"
}

if (dataniver > anoAtual || dataniver <= 0) {
    resp.innerHTML = `ERRO: DADOS INCORRETOS OU NÃO PREENCHIDOS`
} else {
    resp.innerHTML = `DETECTADO: O perfil com o gênero ${genero} terá ${idade} anos em ${anoAtual}`}
}
