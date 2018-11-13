let listaPuntajes = []
let ULTIMO_NIVEL
const btnEmpezar = document.getElementById('btnEmpezar')
btnEmpezar.addEventListener('click', empezarJuego)

function mensajeInicial(texto = 'Elige un nivel') {
    return swal({
        text: texto,
        content: 'input',
        button: {
            text: "Go!",
        },
        closeOnClickOutside: false,
        closeOnEsc: false
    }).then(nivel => {
        if (Number(nivel)) {
            ULTIMO_NIVEL = Number(nivel)
        } else {
            mensajeInicial('Coloque el nivel adecuadamente')
        }
    })
}

mensajeInicial()
class Juego {
    constructor() {
        this.iniciarTiempo()
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel, 500)
    }
    
    inicializar() {
        this.inicializar = this.inicializar.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        this.siguienteNivel = this.siguienteNivel.bind(this)
        btnEmpezar.classList.toggle('hide')
        this.nivel = 1
        this.colores = {
            azul: document.getElementById('azul'),
            rojo: document.getElementById('rojo'),
            naranja: document.getElementById('naranja'),
            verde: document.getElementById('verde')
        },
        this.audio = {
            azul: new Audio('./../../assets/audio/blue.mp3'),
            rojo: new Audio('./../../assets/audio/red.mp3'),
            naranja: new Audio('./../../assets/audio/naranja.mp3'),
            verde: new Audio('./../../assets/audio/green.mp3')
        },
        this.derrota = new Audio('./../../assets/audio/lose.mp3'),
        this.intervalTimer
    }

    generarSecuencia() {
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    siguienteNivel() {
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    transformarNumeroAColor(num) {
        switch (num) {
            case 0:
                return 'azul'
            case 1:
                return 'rojo'
            case 2:
                return 'naranja'
            default:
                return 'verde'
        }
    }

    transfomarColorANumero(color) {
        switch (color) {
            case 'azul':
                return 0
            case 'rojo':
                return 1
            case 'naranja':
                return 2
            default:
                return 3
        }
    }

    iluminarSecuencia() {
        for(let i = 0; i < this.nivel; i++) {
            const color = this.transformarNumeroAColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }

    iluminarColor(color) {
        this.colores[color].classList.add('light')
        this.audio[color].play()
        setTimeout(() => this.apagarColor(color), 500)
    }

    apagarColor(color) {
        this.colores[color].classList.remove('light')
    }

    agregarEventosClick() {
        for (let color in this.colores) {
            this.colores[color].addEventListener('click', this.elegirColor)
        }
    }

    eliminarEventosClick() {
        for (let color in this.colores) {
            this.colores[color].removeEventListener('click', this.elegirColor)
        }
    }

    elegirColor({ target: { dataset: { color } } }) {
        const nombreColor = color
        const numeroColor = this.transfomarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        if (numeroColor === this.secuencia[this.subnivel]) {
            this.subnivel++
            if (this.subnivel === this.nivel) {
                this.nivel++
                this.eliminarEventosClick()
                if (this.nivel === (ULTIMO_NIVEL + 1)) {
                    clearInterval(this.intervalTimer)
                    this.ganoElJuego()
                    this.agregarItemPuntaje()
                } else {
                    setTimeout(() => {
                        swal("Gamespoint - Simon Dice", `Nivel ${this.nivel - 1} completado`, {
                            buttons: false,
                            timer: 1000,
                        })
                    }, 500)
                    setTimeout(this.siguienteNivel, 2000)
                }
            }
        } else {
            this.perdioElJuego()
            this.agregarItemPuntaje()
        }
    }

    agregarItemPuntaje() {
        const list = document.getElementById('timeList')
        const tiempoTranscurrido = document.getElementById('timedate').textContent
        listaPuntajes.push(tiempoTranscurrido)
        list.innerHTML = ""
        for (let i = 0; i < listaPuntajes.length; i++) {
            const li = document.createElement('li')
            li.setAttribute('class', 'lista-puntaje-item')
            li.appendChild(document.createTextNode(`Puntaje ${i + 1} : ${listaPuntajes[i]}`))
            list.appendChild(li)
        }
    }

    actualizarPuntaje(initTime) {
        const now = new Date();
        const milli = now.getTime() - initTime;
        document.getElementById('timedate').innerHTML = milli;
    }

    iniciarTiempo() {
        const initTime = new Date().getTime();
        this.actualizarPuntaje(initTime);
        this.intervalTimer = setInterval(this.actualizarPuntaje, 100, initTime);
    }

    ganoElJuego() {
        swal('Gamespoint - Simon Dice','Felicitaciones, Ganaste!', 'success')
            .then(this.inicializar)
    }

    perdioElJuego() {
        clearInterval(this.intervalTimer)
        this.derrota.play()
        swal('Gamespoint - Simon Dice', 'Lo lamentamos, Perdiste :(', 'error')
            .then(() => {
                this.eliminarEventosClick()
                this.inicializar()
            })
    }
}

function empezarJuego() {
    window.juego = new Juego()
}