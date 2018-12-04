            
       
/*valores*/
            var canvas = document.getElementById("canvas");
			var ctx = canvas.getContext("2d");
			var vidas = 5;
			var puntajeACT = 0;
			var puntaje = 0;
			var nivel = 1;
			var boton = document.getElementById("boton");
			var EFECTOS = document.createElement("audio");
			var EFECTOS2 =document.createElement("audio");
            var  EFECTOS3=document.createElement("audio");
            var EFECTOS4=document.createElement("audio");
            var EFECTOS5=document.createElement("audio");
   
            var EFECTOS6=document.createElement("audio");
 
			EFECTOS.src = "./../../assets/audio/efecto.mp3";
			EFECTOS2.src = "./../../assets/audio/reiniciar.mp3";
			EFECTOS3.src = "./../../assets/audio/gandor.mp3";
			EFECTOS4.src = "./../../assets/audio/Perder.mp3";
            EFECTOS5.src = "./../../assets/audio/-vida.mp3";
			EFECTOS6.src = "./../../assets/audio/jugador2.mp3";
														


			boton.addEventListener("click", iniciarJuego);
			
			function dibujar(){
				/*limpiar despues las FC */
				ctx.clearRect(0,0,canvas.width,canvas.height);
				dibujarPelota();
				dibujarRaqueta();
				informacionJG();
				dibujarBloques();
				
			}
			function iniciarJuego(){
				playSonido(EFECTOS6)//SONIDO INICIO
				var base = document.getElementById("base");
				base.style.display = "none";
				frame();
			}
			//Raqueta
			var raqueta = {
				x : canvas.width/2, /*anchura /2*/
				y : canvas.height-7,/*altura -10*/ 
				w : 70,
				h : 20,
				img : document.createElement("img"),
				derecha : false,
				izquierda : false,
				velocidad : 10
			};
			
			raqueta.img.src = "./../../assets/games/raqueta.png";
			function dibujarRaqueta(){
				ctx.drawImage(raqueta.img, raqueta.x, raqueta.y);
			}
			

			function moverRaqueta(){
				if(raqueta.izquierda && raqueta.x < canvas.width - raqueta.w){
					raqueta.x += raqueta.velocidad;
				}
				if(raqueta.derecha && raqueta.x > 0){
					raqueta.x -= raqueta.velocidad;
				}
			}
			/* controles cog   */
			document.addEventListener("keydown", function () {
				if(event.keyCode == 39){
					raqueta.izquierda = true;
				}
				if(event.keyCode == 37){
					raqueta.derecha = true;
				}
			});
			document.addEventListener("keyup", function() {
				if(event.keyCode == 39){
					raqueta.izquierda = false;
				}
				if(event.keyCode == 37){
					raqueta.derecha = false;
				}
			});
			//Fin de la raqueta
			

			//Pelota
			var bola = {
				x : canvas.width/2,
				y : canvas.height/2,
				r : 10,
				xdir : 2,
				ydir : 2,
				color : "#66CCFF"

			};
			function dibujarPelota(){
				ctx.fillStyle = bola.color;
				ctx.beginPath();
				ctx.arc(bola.x, bola.y, bola.r, 0, Math.PI*2);
				ctx.fill();
			 

			}
			function moverPelota(){
				bola.x+=bola.xdir;
				bola.y+=bola.ydir;
			}
			function velocidadBl(){
				bola.x = canvas.width/2;
				bola.y = canvas.height/2;
				bola.xdir = Math.abs(bola.xdir);
				bola.ydir = Math.abs(bola.ydir);
				bola.xdir++;
				bola.ydir++;
			}
			//fin de la pelota
			
			

			//bloques
			var bloques = [];
			var infoBloque = {
				ancho : 75,
				columnas : 5,
				filas : 3,
				alto : 20,
				margen : 10,
				top : 30,
				left : 30,
				img : document.createElement("img")
			};
			infoBloque.img.src = "./../../assets/games/bloque.png";
			function crearBloques(){
				for(c=0;c<infoBloque.columnas;c++){
					bloques[c] = [];
					for(f=0;f<infoBloque.filas;f++){
						var bloqueX = infoBloque.left + (c*(infoBloque.ancho + infoBloque.margen));
						var bloqueY = infoBloque.top + (f * (infoBloque.alto + infoBloque.margen));
						bloques[c][f] = {x:bloqueX, y:bloqueY, status : 1};
					}
				}
			}
			crearBloques();
			
			function dibujarBloques(){
				for(c=0;c<infoBloque.columnas;c++){
					for(f=0;f<infoBloque.filas;f++){
						if(bloques[c][f].status == 1){
							ctx.drawImage(infoBloque.img, bloques[c][f].x, bloques[c][f].y);
						}
					}
				}
			}
			function colisionBloques(){
				

				for(c=0;c<infoBloque.columnas;c++){
					for(f=0;f<infoBloque.filas;f++){
						var bloqueA = bloques[c][f];
						if(bloqueA.status == 1){
							if(bola.x > bloqueA.x && bola.x < (bloqueA.x+infoBloque.ancho) && bola.y > bloqueA.y && bola.y < (bloqueA.y+infoBloque.alto)){
								bloqueA.status = 0;
								bola.ydir = -bola.ydir;
								puntajeACT++;
								playSonido(EFECTOS);
								if(puntajeACT == infoBloque.columnas*infoBloque.filas){
									aumentarNivel();
								}
							}
						}
					}
				}
			}
			//finde los bloques
			

			function playSonido(s){
				s.currentTime = 0;
				s.play();
			}
			
			function aumentarNivel(){
				playSonido(EFECTOS3)
				alert("Felicidades");
				nivel++;
				crearBloques();
				velocidadBl();
				puntajeACT = puntaje;
				puntajeACT = 0;
			}
			
			function perderVida(){
				if(vidas > 0){
					playSonido(EFECTOS5)
					alert("Te mataste");
					vidas--;
				} else {
					playSonido(EFECTOS4)
					alert("Fin de juego");
					findeJuego();
				}
			}
			
			function informacionJG(){
				ctx.fillStyle = "yellow";
				ctx.fillText("Vidas  : "+vidas, 15, 15);
				ctx.fillText("Puntaje : "+puntajeACT, canvas.width - 70, 15);
                ctx.fillText("Nivel : "+nivel, canvas.width - 270, 15);

			}
			
			function findeJuego(){
				document.location.reload();
			}
			

			
			function actualizar(){
				moverRaqueta();
				moverPelota();
			}
			/*perdidad*/function colisiones(){
				if(bola.x <= bola.r || bola.x >= canvas.width-bola.r) bola.xdir = -bola.xdir;
				if(bola.y <= 0) bola.ydir = -bola.ydir;
				if(bola.y >= canvas.height-bola.r){
					bola.ydir = -bola.ydir;
					if(!(bola.x > raqueta.x && bola.x < raqueta.x+raqueta.w)){
						perderVida();
					}
				}
				colisionBloques();
			}
			

			function frame(){
				actualizar();
				colisiones();
				dibujar();
				requestAnimationFrame(frame);
			}
			