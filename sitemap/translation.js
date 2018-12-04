i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                // HERO
                title: 'Site map',
                hero: {
                    home: 'homepage',
                    games: {
                        memory: 'memory card',
                        rps: 'Rock, Paper, Scissors'
                    },
                    contact: 'contact',
                    team: 'team',
                    sitemap: 'sitemap'

                },
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
                // NAV
                nav: {
                    games: 'Games',
                    subscription: 'Subscription',
                    news: 'News'
                },
                // NEWS
                language: {
                    lang: 'Language'
                }
            }
        },
        es: {
            translation: {
                // HERO
                title: 'Mapa de Sitio',
                hero: {
                    home: 'Página Principal',
                    games: {
                        memory: 'Juego de Memoria',
                        rps: 'Piedra, Papel y Tijera'
                    },
                    contact: 'Contacto',
                    team: 'Equipo',
                    sitemap: 'Mapa de Sitio'

                },
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
                // NAVEGADOR
                nav: {
                    games: 'Juegos',
                    subscription: 'Suscripción',
                    news: 'Noticias'
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
        $('.navbar-list').localize()
        $('h1').localize()
        $('a').localize()
        $('.footer-language label').localize()
        changeSuscriptionText(this.value)
    });
});