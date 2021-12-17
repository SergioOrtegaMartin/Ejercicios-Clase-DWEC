export class Juego{
    constructor(jugador1,jugador2) {
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.estado = "partida sin empezar";
    }

    resultado(){
        this.estado = "partida empezada";

        if(this.jugador1.mano == this.jugador2.mano){
            // devuelve 0 si empate
            return 0;
        }
        else if((this.jugador1.mano == "piedra" && this.jugador2.mano == "papel") || 
                (this.jugador1.mano == "tijera" && this.jugador2.mano == "piedra") || 
                (this.jugador1.mano == "papel" && this.jugador2.mano == "tijera")){
                    //devuelve 1 si gana jugador 1
                    this.jugador2.victorias += 1;
                    this.jugador1.derrotas += 1;
                    return 1
            }

            else if((this.jugador1.mano == "piedra" && this.jugador2.mano == "tijera") || 
                    (this.jugador1.mano == "tijera" && this.jugador2.mano == "papel") || 
                    (this.jugador1.mano == "papel" && this.jugador2.mano == "piedra")){
                        //devuelve 2 si gana jugador 2
                        this.jugador1.victorias += 1;
                        this.jugador2.derrotas += 1;
                        return 2
            }
        this.estado = "partida terminada";
    }
}