const azul = document.getElementById('azul')
const rojo = document.getElementById('rojo')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const verdeAudio = new Audio('./../../assets/audio/green.mp3')
const rojoAudio = new Audio('./../../assets/audio/red.mp3')
const azulAudio = new Audio('./../../assets/audio/blue.mp3')
const naranjaAudio = new Audio('./../../assets/audio/naranja.mp3')
const audioPerder = new Audio('./../../assets/audio/lose.mp3')
const ULTIMO_NIVEL = 10
const btnEmpezar = document.getElementById('btnEmpezar')
btnEmpezar.addEventListener('click', empezarJuego)

class Juego {
    constructor() {
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
            azul,
            rojo,
            naranja,
            verde
        },
        this.audio = {
            azul: azulAudio,
            rojo: rojoAudio,
            naranja: naranjaAudio,
            verde: verdeAudio
        },
        this.derrota = audioPerder
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
        for(let color in this.colores) {
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
                    this.ganoElJuego()
                } else {
                    setTimeout(this.siguienteNivel, 1500)
                }
            }
        } else {
            this.perdioElJuego()
        }
    }

    ganoElJuego() {
        swal('Gamespoint','Felicitaciones, Ganaste!', 'success')
            .then(this.inicializar)
    }

    perdioElJuego() {
        this.derrota.play()
        swal('Gamespoint', 'Lo lamentamos, Perdiste :(', 'error')
            .then(() => {
                this.eliminarEventosClick()
                this.inicializar()
            })
    }
}

function empezarJuego() {
    window.juego = new Juego()
}