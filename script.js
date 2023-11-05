document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.js--class');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const errors = document.querySelectorAll('.js--error-msg');

        if (errors.length > 0) {
            errors.forEach(function (value) {
                value.remove();
            });
        }

        formData.forEach(function (value, name) {
            const errorMessage = document.createElement('p');
            errorMessage.classList.add('js--error-msg');

            if (name === 'name') {
                const regCheckName = /^[A-Za-zА-Яа-я]+( [A-Za-zА-Яа-я]+)*$/ ;

                if (!value.match(regCheckName)) {
                    errorMessage.innerHTML = 'The field is required and should contain only letters';
                    document.querySelector(`input[name="name"]`).insertAdjacentElement('afterend', errorMessage);
                }
            }

            if (name === 'message') {
                const regCheckMessage = /^[A-Za-zА-Яа-я]{5,}$/;

                if (!value.match(regCheckMessage)) {
                    errorMessage.innerHTML = 'The field should contain at least 5 letters';
                    document.querySelector(`textarea[name="message"]`).insertAdjacentElement('afterend', errorMessage);
                }
            }

            if (name === 'tel') {
                const regCheckTel =  /^\+380\d{9}$/;

                if (!value.match(regCheckTel)) {
                    errorMessage.innerHTML = 'The field should contain just numbers and start with +380';
                    document.querySelector(`input[name="tel"]`).insertAdjacentElement('afterend', errorMessage);
                }
            }

            if (name === 'email') {
                const regCheckEmail =  /@.*\./;

                if (!value.match(regCheckEmail)) {
                    errorMessage.innerHTML = 'The field should contain @ and .';
                    document.querySelector(`input[name="email"]`).insertAdjacentElement('afterend', errorMessage);
                }
            }
            console.log(`${name} - ${value}`);
        })
    })
})




