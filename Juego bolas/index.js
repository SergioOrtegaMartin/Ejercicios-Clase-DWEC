import {bola} from './clase_bola.js';

import {barra} from './clase_barra.js';


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function colorAleatorio()
{
    return "#"+ Math.floor(Math.random()*16777215).toString(16);
}

var bolas = new Array();
var barras = new Array();
var svg; 
var elId;
var tamanoSVG;

function moverBarraFlechas(){
    return 
}

 window.onload = () =>
  {
      svg = document.getElementById("panel");

      for (let i=0; i<1; i++)
        bolas.push(new bola(aleatorio(4,50), aleatorio(70,900), aleatorio(70,900), aleatorio(1,15),aleatorio(1,15),colorAleatorio(),svg));

    
    barras.push(new barra(100, 25,1, aleatorio(1,550),aleatorio(1,15),colorAleatorio(),svg));
    barras.push(new barra(100, 25, 1440, aleatorio(1,550),aleatorio(1,15),colorAleatorio(),svg));
     // setInterval( loop, 30);
     elId = window.requestAnimationFrame(loop);
  }



  function loop()
  {
      tamanoSVG = svg.getBoundingClientRect();
      for (let i=0; i<bolas.length; i++)
      {
        bolas[i].mueve(tamanoSVG.width, tamanoSVG.height);

        for (let j=0; j<bolas.length; j++)
            if (i!=j) bolas[i].colisiona(bolas[j]);
        
          bolas[i].dibuja();
      }
      
      elId = window.requestAnimationFrame(loop);
  }

