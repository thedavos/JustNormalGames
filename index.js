$(() => {

    function rotateBanner() {
        let count = 0
        let index = 0
        const gamesImages = Array.from($('.hero-item').children('img'))
        const gamesItems = Array.from($('.hero-games').children())

        function carouselEngine() {
            if (count === 360) {
                count = 0
            }

            if (count === 268) {

                if (index > gamesImages.length - 1) {
                    index = 0
                }

                $('.header-image').attr('src', `${gamesImages[index].src}`);

                index++
            }

            count++
            $('.header-image').css('transform', `rotateX(${count}deg)`)
        }

        const intervalo = setInterval(carouselEngine, 10)

        $('#main-btn').click(function (e) {
            window.open(gamesItems[index != 4 ? index : 3].href)
        });
        
        let status = true
        $('.header-image').click(function() {
            if (status) {
                clearInterval(intervalo)
                status = false
            } else {
                rotateBanner()
                status = true
            }
        })
    }

    rotateBanner()

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
})