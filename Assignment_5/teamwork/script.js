(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (form.id === 'regForm') {
                checkPasswords();
            }

            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                event.preventDefault();
                if (form.id === 'regForm') {
                    document.getElementById('successMsg').classList.remove('d-none');
                }
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passFeedback = document.getElementById('passFeedback');

function checkPasswords() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
        passFeedback.textContent = "Passwords do not match!";
    } else {
        confirmPassword.setCustomValidity("");
    }
}

document.getElementById('resetBtn').addEventListener('click', () => {
    const regForm = document.getElementById('regForm');
    regForm.classList.remove('was-validated');
    document.getElementById('successMsg').classList.add('d-none');
    confirmPassword.setCustomValidity("");
});
