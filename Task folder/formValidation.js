const form = document.getElementById("signupForm");
const nameIp = document.getElementById("name");
const nameError = document.getElementById("nameError");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmInput = document.getElementById("confirmInput");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const result = document.getElementById("result");
const confirmError = document.getElementById("confirmError");

function showError(el, message) {
    el.innerHTML = message;
}

function clearError(el) {
    el.innerHTML = "";
}

function validateName() {
    let value = nameIp.value.trim();
    if(value.length < 2) {
        showError(nameError, "Name is not valid");
        return false;
    }
    clearError(nameError);
    return true;
}

function validateEmail() {
    let value = email.value.trim();
    if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
        showError(emailError, "enter valid email address");
        return false;
    }
    clearError(emailError);
    return true;
}

function validatePassword() {
    let value = password.value;
    if(value.length < 8) {
        showError(passError, "enter 8 character of password");
        return false;
    }
    clearError(passError);
    return true;
}

function validateConfirm() {
    let value = password.value;
    let confirm = confirmInput.value;
    if(confirm == "") {
        showError(confirmError, "please confirm your password");
        return false;
    }
    if(confirm !== value) {
        showError(confirmError, "password do not match");
        return false;
    }
    clearError(confirmError);
    return true;
}

function validateForm() {
    let goodName = validateName();
    let rightEmail = validateEmail();
    let goodPassword = validatePassword();
    let doneConform = validateConfirm();
    return goodName && rightEmail && goodPassword && doneConform;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    result.innerHTML = "";

    if(validateForm()) {
        result.innerHTML = "Form is valid";
        result.className = "ok";
    } 
    else {
        result.innerHTML = "please fix the errors.";
        result.className = "error";
    }
});