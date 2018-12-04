i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                // HERO
                title: 'Contact',
                hero: {
                    title: 'Leave your message here',
                    form: {
                        name: 'Name (Required)',
                        email: 'Email (Required)',
                        msg: 'Your Message',
                        btn: 'Send'
                    }
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
                title: 'Contacto',
                hero: {
                    title: 'Deja tu mensaje aquí',
                    form: {
                        name: 'Nombre (Requerido)',
                        email: 'Correo (Requerido)',
                        msg: 'Tu Mensaje',
                        btn: 'Enviar'
                    }
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
        $('h2').localize()
        $('form').localize()
        $('.footer-language label').localize()
        changeSuscriptionText(this.value)
    });
});