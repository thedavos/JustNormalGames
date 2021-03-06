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
                // NEWS
                news: {
                    more: 'See more',
                    first: "Daeja's View: Not all Fun and Games",
                    second: "Alliance will be at ESL One Hamburg 2018",
                    third: "Zechs Files: Who Won Transfer Season?",
                    fourth: "The New 'League Of Legends' Video 'Rise' Is Entirely Amazing"
                },
                language: {
                    lang: 'Language'
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
                // NEWS
                news: {
                    more: 'Ver más',
                    first: "Perspectiva de Daeja: Nada de diversión y juegos",
                    second: "Alliance estará en el ESL One Hamburg 2018",
                    third: "Archivos Zechs: ¿Quién ganó la temporada de transferencias?",
                    fourth: "El nuevo video de 'League of Legends' 'Rise' es completamente asombroso",
                },
                language: {
                    lang: 'Idioma'
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
        $('.news-card-title').localize()
        $('h2').localize()
        $('.footer-language label').localize()
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