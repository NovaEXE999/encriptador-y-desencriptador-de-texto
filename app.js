let botonEncriptar = document.querySelector("#boton-encriptar");
let botonDesencriptar = document.querySelector("#boton-desencriptar");
let munieco = document.querySelector(".contenedor-munieco");
let contenedor = document.querySelector(".contenedor-parrafos");
let resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    let cajaTexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar(){
    ocultarAdelante();
    let cajaTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto(){
    let cajaTexto = document.querySelector("#ingreso-texto");
    return cajaTexto.value;
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(var i = 0;  i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for(var i = 0; i <texto.length; i++) {
        if(texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i = i+1;
        }
        else if(texto[i] == "e") {
            textoFinal = textoFinal + "e";
            i = i+4;
        }
        else if(texto[i] == "i") {
            textoFinal = textoFinal + "i";
            i = i+3;
        }
        else if(texto[i] == "o") {
            textoFinal = textoFinal + "o";
            i = i+3;
        }
        else if(texto[i] == "u") {
            textoFinal = textoFinal + "u";
            i = i+3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

let btnCopiar = document.querySelector( "#boton-copiar" );
btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
})