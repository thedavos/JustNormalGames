i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                // FOOTER
                footerLinks: {
                    contact: 'Contact',
                    source: 'Source Code',
                    team: 'Team',
                    sitemap: 'SiteMap'
                },
                copy: {
                    msg: '© Copyright Cibertec Developers Team 2018'
                },
                option: {
                    en: 'English',
                    es: 'Spanish'
                },
                // TITLES
                titles: {
                    news: 'Last News',
                    games: 'Javascript Games',
                    play: 'Play Game'
                },
                // NAV
                nav: {
                    games: 'Games',
                    subscription: 'Subscription',
                    news: 'News'
                },
                news: {
                    more: 'See more'
                }
            }
        },
        es: {
            translation: {
                // FOOTER
                footerLinks: {
                    contact: 'Contacto',
                    source: 'Código Fuente',
                    team: 'Equipo',
                    sitemap: 'Mapa de Sitio'
                },
                copy: {
                    msg: '© Equipo de Desarrolladores Cibertec 2018'
                },
                option: {
                    en: 'Inglés',
                    es: 'Español'
                },
                // TÍTULOS
                titles: {
                    news: 'Últimas Noticias',
                    games: 'Juegos Javascript',
                    play: 'Juega'
                },
                // NAVEGADOR
                nav: {
                    games: 'Juegos',
                    subscription: 'Suscripción',
                    news: 'Noticias'
                },

                news: {
                    more: 'Ver más'
                }
            }
        }
    }
}, function (err, t) {
    i18nextJquery.init(i18next, $);

    $('#selectLanguage').change(function () {

        i18next.changeLanguage(this.value)
        $('.footer-links').localize()
        $('.footer-copy').localize()
        $('#selectLanguage').localize()
        $('#main-btn').localize()
        $('.navbar-list').localize()
        $('.news-card-more').localize()
        $('h2').localize()
        changeSuscriptionText(this.value)
    });
});

function changeSuscriptionText(value) {
    if (value === 'es-ES') {
        $('#email').attr('placeholder', 'Deja tu e-mail aquí si quieres conocer las últimas noticias!')
        $('#btnSuscription').attr('value', 'SUSCRÍBETE')
    } else {
        $('#email').attr('placeholder', 'Leave your e-mail here if you want to know the last games and news!')
        $('#btnSuscription').attr('value', 'SUSCRIBE')
    }
}