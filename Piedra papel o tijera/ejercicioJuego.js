import{Juego} from './clase_juego.js'
import{Jugador} from './clase_jugador.js'

var p;
var juego;
var jugadorPrimero;
var jugadorSegundo;

function crearJugadores(){
    var nombre1 = document.getElementById("nombre1").value;
    jugadorPrimero = new Jugador(nombre1);
    var nombre2 = document.getElementById("nombre2").value;
    jugadorSegundo = new Jugador(nombre2);
    juego = new Juego(jugadorPrimero,jugadorSegundo);
    document.getElementById("1").innerHTML = jugadorPrimero.nombre.bold() + " => Victorias: " + jugadorPrimero.victorias + " | " + "Derrotas: " + jugadorPrimero.derrotas
    document.getElementById("2").innerHTML = jugadorSegundo.nombre.bold() + " => Victorias: " + jugadorSegundo.victorias + " | " + "Derrotas: " + jugadorSegundo.derrotas
}

function manoJugador1Piedra(){
    jugadorPrimero.mano = "piedra";
}
function manoJugador1Papel(){
    jugadorPrimero.mano = "papel";
}
function manoJugador1Tijera(){
    jugadorPrimero.mano = "tijera";
}
function manoJugador2Piedra(){
    jugadorSegundo.mano = "piedra";
}
function manoJugador2Papel(){
    jugadorSegundo.mano = "papel";
}
function manoJugador2Tijera(){
    jugadorSegundo.mano = "tijera";
}

function resultado(){
    let quienHaGanado=juego.resultado();
    p = document.getElementById("resultado");

    if(quienHaGanado == 0){
        p.innerHTML = "empate";
    }
    else if(quienHaGanado == 1){
        p.innerHTML = "gana " + jugadorSegundo.nombre;
        document.getElementById("1").innerHTML = jugadorPrimero.nombre.bold() + " => Victorias: " + jugadorPrimero.victorias + " | " + "Derrotas: " + jugadorPrimero.derrotas
        document.getElementById("2").innerHTML = jugadorSegundo.nombre.bold() + " => Victorias: " + jugadorSegundo.victorias + " | " + "Derrotas: " + jugadorSegundo.derrotas
    }
    else if(quienHaGanado == 2){
        p.innerHTML = "gana " + jugadorPrimero.nombre;
        document.getElementById("1").innerHTML = jugadorPrimero.nombre.bold() + " => Victorias: " + jugadorPrimero.victorias + " | " + "Derrotas: " + jugadorPrimero.derrotas
        document.getElementById("2").innerHTML = jugadorSegundo.nombre.bold() + " => Victorias: " + jugadorSegundo.victorias + " | " + "Derrotas: " + jugadorSegundo.derrotas
    }
}

function inicia(){
    document.getElementById("crearJugadores1").addEventListener('click',crearJugadores);
    document.getElementById("jugar").addEventListener('click',resultado);
    document.getElementById("piedra1").addEventListener('click',manoJugador1Piedra);
    document.getElementById("papel1").addEventListener('click',manoJugador1Papel);
    document.getElementById("tijera1").addEventListener('click',manoJugador1Tijera);
    document.getElementById("piedra2").addEventListener('click',manoJugador2Piedra);
    document.getElementById("papel2").addEventListener('click',manoJugador2Papel);
    document.getElementById("tijera2").addEventListener('click',manoJugador2Tijera);
}

window.addEventListener('load',inicia);