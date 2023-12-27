const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password_repeat = document.querySelector("#password-repeat");
const terms_conditions = document.querySelector("#terms-conditions");

const submit = document.querySelector("#signup");

function validateText(e) {
    if (e.checkValidity()) {
        e.parentElement.classList.remove("error");
    }
    else {
        e.parentElement.classList.add("error");
    }
}

function validatePasswordRepeat() {
    if (password_repeat.value === "") {
        password_repeat.parentElement.classList.add("error");
    }
    else if (password_repeat.value !== password.value) {
        password_repeat.parentElement.classList.add("error");
    }
    else {
        password_repeat.parentElement.classList.remove("error");
    }
}

function validateTermsConditions() {
    if(terms_conditions.checked) {
        terms_conditions.parentElement.classList.remove("error");
    }
    else {
        terms_conditions.parentElement.classList.add("error");
    }
}

firstname.addEventListener('keyup', e => validateText(e.target));
firstname.addEventListener('click', e => validateText(e.target));

lastname.addEventListener('keyup', e => validateText(e.target));
lastname.addEventListener('click', e => validateText(e.target));

username.addEventListener('keyup', e => validateText(e.target));
username.addEventListener('click', e => validateText(e.target));

email.addEventListener('keyup', e => validateText(e.target));
email.addEventListener('click', e => validateText(e.target));

password.addEventListener('keyup', e => validateText(e.target));
password.addEventListener('click', e => validateText(e.target));

password_repeat.addEventListener('keyup', () => validatePasswordRepeat());
password_repeat.addEventListener('click', () => validatePasswordRepeat());

submit.addEventListener('click', () => {
    validateText(firstname);
    validateText(lastname);
    validateText(username);
    validateText(email);
    validateText(password);
    validatePasswordRepeat();
    validateTermsConditions();
})
