

var EFECTOS = document.createElement("audio");
var SAM=document.createElement("audio");			

EFECTOS.src = "./../../assets/audio/mario-coin.mp3";
SAM.src ="./../../assets/audio/hospital-machines-startup.mp3";
boton.addEventListener("click", iniciarJuego);

function iniciarJuego(){
				var base = document.getElementById("base");
				base.style.display = "none";
				
			}


function inicio(){


}

(function () {
			

	var Nrmnds= 5,
		Pnts = 0,
	   monedas = [],
		canvas;			

	function bucleGM () {
	
	  var i;
	
	  window.requestAnimationFrame(bucleGM);
	  
	  // Borrar el lienzo
	  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

	  for (i = 0; i < monedas.length; i += 1) {
		  monedas[i].update();
		  monedas[i].render();
	  }
	}
	/* colección de imágenes puestas en una sola imagen SPRITE  definimos el objeto*/
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.x = 0;
		that.y = 0;
		that.image = options.image;
		that.scaleRatio = 1;
		
		that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				
                // Si el índice de cuadro actual está en en el canvas
                if (frameIndex < numberOfFrames - 1) {	
                    // Ir al siguiente cuadro
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };
		
		that.render = function () {

		  // Dibujar la animacion
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    that.x,
		    that.y,
		    that.width / numberOfFrames * that.scaleRatio,
		    that.height * that.scaleRatio);
		};
		
		that.getFrameWidth = function () {
			return that.width / numberOfFrames;
		};
		
		return that;
	}
	
	function destroyCoin (coin) {
	
		var i;
		
		for (i = 0; i < monedas.length; i += 1) {
			if (monedas[i] === coin) {
				monedas[i] = null;
				monedas.splice(i, 1);
				break;
			}
		}
	}
	
	function spawnCoin () {
	
		var coinIndex,
			coinImg;
	
		// Crear hoja de sprites.
		coinImg = new Image();	
	
		coinIndex = monedas.length;
		
		// Crear sprite
		monedas[coinIndex] = sprite({
			context: canvas.getContext("2d"),
			width: 1000,
			height: 100,
			image: coinImg,
			numberOfFrames: 10,
			ticksPerFrame: i
		});
		
		monedas[coinIndex].x = Math.random() * (canvas.width - monedas[coinIndex].getFrameWidth() * monedas[coinIndex].scaleRatio);
		monedas[coinIndex].y = Math.random() * (canvas.height - monedas[coinIndex].height * monedas[coinIndex].scaleRatio);
		
		monedas[coinIndex].scaleRatio = Math.random() * 0.5 + 0.5;
		 
		//   cargará la imagen.
		coinImg.src = "./../../assets/games/MONEDA.png";
	}
	
	function getElementPosition (element) {
	
       var parentOffset,
       	   pos = {
               x: element.offsetLeft,
               y: element.offsetTop 
           };
           
       if (element.offsetParent) {
           parentOffset = getElementPosition(element.offsetParent);
           pos.x += parentOffset.x;
           pos.y += parentOffset.y;
       }
       return pos;
    }
	
	function distance (p1, p2) {
	
		var dx = p1.x - p2.x,
			dy = p1.y - p2.y;
			
		return Math.sqrt(dx * dx + dy * dy);
	}
	
	function tap (e) {
	
		var i,
			loc = {},
			dist,
			coinsToDestroy = [];
			pos = getElementPosition(canvas),
			tapX = e.targetTouches ? e.targetTouches[0].pageX : e.pageX,
			tapY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY,
			canvasScaleRatio = canvas.width / canvas.offsetWidth;

		loc.x = (tapX - pos.x) * canvasScaleRatio;
		loc.y = (tapY - pos.y) * canvasScaleRatio;
			
		for (i = 0; i < monedas.length; i += 1) {
		
			// Distancia entre  moneda --relación
			dist = distance({
				x: (monedas[i].x + monedas[i].getFrameWidth() / 2 * monedas[i].scaleRatio),
				y: (monedas[i].y + monedas[i].getFrameWidth() / 2 * monedas[i].scaleRatio)
			}, {
				x: loc.x,
				y: loc.y
			});
			
			// colisión del  la moneda		
			
           //obtener el ancho del marco-monedas para destruir

			if (dist < monedas[i].getFrameWidth() / 2 * monedas[i].scaleRatio) {
				coinsToDestroy.push(monedas[i]);
			

			}
		}
		
		// Destruye las monedas giradas.
		for (i = 0; i < coinsToDestroy.length; i += 1) {
		
			Pnts += parseInt(coinsToDestroy[i].scaleRatio * 10, 10);
			destroyCoin(coinsToDestroy[i]);	
			setTimeout(spawnCoin, 1000);	
		playSonido(EFECTOS);
		/*soltar monedas*/
		}
		
		if (coinsToDestroy.length) {
			document.getElementById("puntos").innerHTML = Pnts;
		}
	}
	

 // Conseguir lienzo
	canvas = document.getElementById("contenedorGm");
	canvas.width = 460;
	canvas.height = 230;
	
	for (i = 0; i < Nrmnds; i += 1) {
	
		spawnCoin();
	}
	
	bucleGM();
	
	canvas.addEventListener("touchstart", tap);
	canvas.addEventListener("mousedown", tap);




} ());

function playSonido(s){
				s.currentTime = 0;
				s.play();
			}
function pro1(){

playSonido(SAM);
}
function pro(){
alert("START");

}    