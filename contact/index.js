const regex = {
    name: /^[a-záéíóú\s]+$/i,
    email: /^[\w\.-_!#$%&-]+@[a-z]+\.[a-z]{2,4}$/,
    message: /^[\w\s]{1,240}$/
}

function validateName(name, regex) {
    return !!regex.name.test(name)
}

function validateEmail(email, regex) {
    return !!regex.email.test(email)
}

function validateMessage(message, regex) {
    return !!regex.message.test(message)
}

function controlForm(name, email, message, regex) {

    const validName = validateName(name, regex)
    const validEmail = validateEmail(email, regex)
    const validMessage = validateMessage(message, regex)

    if (!validName) {
        $('#name').css({
            borderBottom: '2px solid #ff5b5b',
        });
    } else {
        $('#name').css({
            borderBottom: '1px solid var(--primary-bg)',
        });
    }

    if (!validEmail) {
        $('#email').css({
            borderBottom: '2px solid #ff5b5b',
        });
    } else {
        $('#email').css({
            borderBottom: '1px solid var(--primary-bg)',
        });
    }

    if (!validMessage) {
        $('#message').css({
            borderBottom: '2px solid #ff5b5b',
        });
    } else {
        $('#message').css({
            borderBottom: '1px solid var(--primary-bg)',
        });
    }
}

$('#btn').click((e) => {
    e.preventDefault()

    const name = $('#name').val()
    const email = $('#email').val()
    const message = $('#message').val()

    if (validateName(name, regex) && validateEmail(email, regex) && validateMessage(message, regex)) {
        controlForm(name, email, message, regex)
        swal({
            icon: 'success',
            text: 'Mensaje enviado',
            showConfirmButton: false,
            timer: 1500
        })
        $('form').trigger('reset')
    } else {
        controlForm(name, email, message, regex)
        swal({
            icon: 'error',
            title: 'Oops...'
        })
    }
})