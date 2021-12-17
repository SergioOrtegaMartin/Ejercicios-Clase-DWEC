export class barra
{
      constructor(largo, ancho, posicionX, posicionY, velocidadY, color,  svgContenedor) {
        this.largo = largo;
        this.ancho = ancho;
        this.x = posicionX;
        this.y = posicionY;
        this.color = color;

        this.vY = velocidadY;

        // Creación del tag
        this.tagRectangle = document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.tagRectangle.setAttribute("fill", this.color);
        this.tagRectangle.setAttribute("x", this.x);
        this.tagRectangle.setAttribute("y", this.y);
        this.tagRectangle.setAttribute("width", this.ancho);
        this.tagRectangle.setAttribute("height", this.largo);
        svgContenedor.appendChild(this.tagRectangle);
    }

    mueve(altoContenedor)
    {

        this.posAnteriorY = this.y;
        this.y += this.vY;    
        
        // Comprobamos ahora si está fuera de los límites
        
        // Eje Y
        if (this.y <= 0 || this.y + this.largo >= altoContenedor )
        {
            this.vY *= -1;
            this.y  = (this.y-this.largo<=0) ? this.largo: altoContenedor - this.largo;
        }
    }

    dibuja()
    {
        this.tagRectangle.setAttributeNS(null, "x", this.x);
        this.tagRectangle.setAttributeNS(null, "y", this.y);
    }
}