export class bola
{
      constructor(radio, posicionX, posicionY, velocidadX, velocidadY, color, svgContenedor) {
        this.x = posicionX;
        this.y = posicionY;
        this.color = color;
        this.radio = radio;
        this.vX = velocidadX;
        this.vY = velocidadY;

        // Creación del tag
        this.tagCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.tagCircle.setAttributeNS(null, "fill", this.color);
        this.tagCircle.setAttributeNS(null, "cx", this.x);
        this.tagCircle.setAttributeNS(null, "cy", this.y);
        this.tagCircle.setAttributeNS(null, "r", this.radio);
        svgContenedor.appendChild(this.tagCircle);
    }
    
    mueve(anchoContenedor, altoContenedor)
    {
        this.posAnteriorX = this.x;
        this.posAnteriorY = this.y;

        this.x += this.vX;
        this.y += this.vY;    
        
        // Comprobamos ahora si está fuera de los límites
        // Eje X
        if (this.x-this.radio<=0 || this.x+this.radio >= anchoContenedor )
        {
            this.vX *= -1;
            this.x  = (this.x-this.radio<=0) ? this.radio: anchoContenedor-this.radio;
        }
        
        // Eje Y
        if (this.y-this.radio <=0 || this.y+this.radio >= altoContenedor )
        {
            this.vY *= -1;
            this.y  = (this.y-this.radio<=0) ? this.radio: altoContenedor-this.radio;
        }
    }

    colisiona(otraBola){
        let dx = this.x - otraBola.x;
        let dy = this.y - otraBola.y;
        let distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia < this.radio + otraBola.radio) {
            this.vX *=-1;
            this.vY *= -1;

            this.x = this.posAnteriorX;
            this.y = this.posAnteriorY;
        }
    }
    
    dibuja()
    {
        this.tagCircle.setAttributeNS(null, "cx", this.x);
        this.tagCircle.setAttributeNS(null, "cy", this.y);
    }

}

