        var turno = "X";	
		var turno2= "O"; 
		var bandera=1; //declaracion de var globales
		var ban=false; // VAR BOOLEAN veradero o false
		var opciones = new Array(9);//arreglo para las pocisiones 
	    var EFECTO1 = document.createElement("audio");
	    var EFECTO2=document.createElement("audio");
        var WIN = document.createElement("audio");
	    var RNC=document.createElement("audio");
		EFECTO1.src = "./../../assets/audio/jugador1.mp3";
		EFECTO2.src ="./../../assets/audio/jugador2.mp3";
		WIN.src ="./../../assets/audio/gandor.mp3";
		RNC.src ="./../../assets/audio/reiniciar.mp3";

function playSonido(s){
				s.currentTime = 0;
				s.play();
			}



function marcar(id){		
			// Para los turnos
			var celda = document.getElementById(id);
			if(bandera%2!=0 && opciones[id]!=0){ //Residuo (%) !=no 
				celda.value = turno;
				document.getElementById("div_turno").innerHTML="Turno del jugador : "+turno2;
				celda.style.background="lightblue";
				playSonido(EFECTO1)
				opciones[id]=1;                          //1=jugador primero
			}
			else if(bandera%2==0 && opciones[id]!=1){   //ID=1
				celda.value=turno2;
				document.getElementById("div_turno").innerHTML="Turno del jugador : "+turno;celda.style.background="lightgreen";
					playSonido(EFECTO2)
				opciones[id]=0;                        
        } 
        bandera++;  //0=jugador primero
jugadorX();         //ID =0 
jugadorO();
}                             /*  ESTRUCTURA
				                 ¬¬¬¬¬¬¬¬¬¬¬
				                ! 1 | 2 | 3 ! 
			                    !___!___!___!
			                    ! 4 | 5 | 6 ! 
			                    !___!___!___!    
			                    ! 7 | 8 | 9 !
                                 ¬¬¬¬¬¬¬¬¬¬¬ */
		function jugadorX(){                            
				//para el jugador 1
				if(opciones[1]==1 && opciones[2]==1 && opciones[3]==1){//primer linea horizontal
					playSonido(WIN)	
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno + ', Ganaste!', 'success')
				}else if(opciones[4]==1 && opciones[5]==1 && opciones[6]==1){//segunda linea horizontal
					playSonido(WIN)
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno + ', Ganaste!', 'success')
				}else if(opciones[7]==1 && opciones[8]==1 && opciones[9]==1){//tercera linea horizontal
					playSonido(WIN)
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno + ', Ganaste!', 'success')
				}else if(opciones[1]==1 && opciones[5]==1 &&opciones[9]==1){//primera linea diagonal
					playSonido(WIN)
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno + ', Ganaste!', 'success')
				}else if(opciones[3]==1 && opciones[5]==1 &&opciones[7]==1){//segunda linea diagonal
					playSonido(WIN)
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno + ', Ganaste!', 'success')
				}else if(opciones[1]==1 && opciones[4]==1 &&opciones[7]==1){//primer linea vertical izquierda
					playSonido(WIN)
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno + ', Ganaste!', 'success')
				}else if(opciones[2]==1 && opciones[5]==1 &&opciones[8]==1){//linea de enmedio vertical
					playSonido(WIN)
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno + ', Ganaste!', 'success')
				}else if(opciones[3]==1 && opciones[6]==1 &&opciones[9]==1){//tercer linea vertical derecha
					playSonido(WIN)
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno + ', Ganaste!', 'success')
				}
                }
                // para el jugador 2
               function jugadorO(){
				if(opciones[1]==0 && opciones[2]==0 && opciones[3]==0){//primer linea horizontal
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno2 + ', Ganaste!', 'success')
				}else if(opciones[4]==0 && opciones[5]==0 && opciones[6]==0){//segunda linea horizontal
					playSonido(WIN)
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno2 + ', Ganaste!', 'success') 
				}else if(opciones[7]==0 && opciones[8]==0 && opciones[9]==0){//tercera linea horizontal
					playSonido(WIN)
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno2 + ', Ganaste!', 'success')
				}else if(opciones[1]==0 && opciones[5]==0 &&opciones[9]==0){//primera linea diagonal
					playSonido(WIN)
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno2 + ', Ganaste!', 'success')
				}else if(opciones[3]==0 && opciones[5]==0 &&opciones[7]==0){//segunda linea diagonal
					playSonido(WIN)
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno2 + ', Ganaste!', 'success')
				}else if(opciones[1]==0 && opciones[4]==0 &&opciones[7]==0){//primer linea vertical izquierda
					playSonido(WIN)
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno2 + ', Ganaste!', 'success')
				}else if(opciones[2]==0 && opciones[5]==0 &&opciones[8]==0){//linea de enmedio vertical
					playSonido(WIN)
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno2 + ', Ganaste!', 'success')
				}else if(opciones[3]==0 && opciones[6]==0 &&opciones[9]==0){//tercer linea vertical derecha
					playSonido(WIN)
					swal('Gamespoint - Tic Tac Toe', 'Felicitaciones Jugador ' + turno2 + ', Ganaste!', 'success')
				}
               }
                                 
 
               function FN(){
				playSonido(RNC);
			}
                // funcion para reiniciar el juego
               function reiniciar(){
               	
               	location.reload();
              
                 }
              