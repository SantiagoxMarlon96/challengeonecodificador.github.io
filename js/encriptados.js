// Inputs de encriptar y desencriptar ...
const inputContenido = document.querySelector("#txtContenido");
const inputResultado = document.querySelector("#txtResultado");
// Buttons de encriptar, desencriptar y copiar ...
const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesencriptar = document.querySelector("#btnDesencriptar");
const btnCopiar = document.querySelector("#btnCopiar");


function Encriptar() {
    var texto = inputContenido.value.toLowerCase();
    var msgEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
    inputResultado.value = msgEncriptado;

    document.getElementById("imgMuneco").style.display = "none";
    document.getElementById("textEncontrado").style.display = "none";
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "block";
}

function Desencriptar() {
    var msgEncriptado = inputContenido.value.toLowerCase();
    var texto = msgEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
    inputResultado.value = texto;
}

function Copiar() {
    var msgEncriptado = inputResultado.value;
    navigator.clipboard.writeText(msgEncriptado);
}

btnEncriptar.onclick = Encriptar;
btnDesencriptar.onclick = Desencriptar;
btnCopiar.onclick = Copiar;