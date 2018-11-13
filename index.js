$(() => {

    function rotateBanner() {
        let count = 0
        let index = 0
        const gamesImages = Array.from($('.hero-item').children('img'))
        const gamesItems = Array.from($('.hero-games').children())
        setInterval(() => {

            if(count === 360) {
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
        }, 10)

        $('#main-btn').click(function (e) {
            window.open(gamesItems[index != 4 ? index : 3].href)
        });
    }

    rotateBanner()

})