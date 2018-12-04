$(() => {
    function setAttributes(element, attributes) {
        for (const attribute in attributes) {
            element.setAttribute(attribute, attributes[attribute])
        }
    }

    function addImagesToBanner() {
        const gamesImages = Array.from($('img[alt=Game]'))

        gamesImages.forEach(image => {
            const gameImage = document.createElement('img')
            setAttributes(gameImage, {
                src: image.src,
                class: 'header-image',
                alt: 'Games'
            })
            $('.siema').append(gameImage);
        })
    }

    addImagesToBanner();

    const mySiema = new Siema({
        duration: 1000,
        loop: true,
    });

    setInterval(() => mySiema.next(), 2000)

    $('#main-btn').click(function (e) { 
        const games = Array.from($('.hero-games').children());
        const randomNumber = Math.floor(Math.random() * games.length);
        window.open(games[randomNumber].href);
    });

    function isCorrect(input) {
        input.css('border', 'none')
        return swal(
            'Suscrito!',
            'Cada semana publicamos un nuevo artículo!',
            'success'
        )
    }

    function isIncorrect(input) {
        input.css('border', '2px solid #ffb5b5')
        return swal(
            'Oops...',
            'Al parecer hubo un error con tu email',
            'error'
        )
    }

    function validateForm() {

        const regexEmail = /^[\w\.-_!#$%&-]+@[a-z]+\.[a-z]{2,4}$/
        
        $('#newsletter-form').submit(function (e) { 
            e.preventDefault();

            const email = $('#email')
            const emailValue = $('#email').val()

            if (regexEmail.test(emailValue)) {
                isCorrect(email)
            } else {
                isIncorrect(email)
            }
        });
    }

    validateForm()

    const scroll = new SmoothScroll('a[href*="#"]', {
        easing: 'easeInOutQuad'
    });
})