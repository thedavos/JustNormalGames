i18next.init({
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: {
                "key": "hola mundo!"
            }
        }
    }
}, function (err, t) {
    // initialized and ready to go!
   
    /* document.getElementById('output').innerHTML = i18next.t('key'); */
});