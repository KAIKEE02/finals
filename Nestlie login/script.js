document.getElementById("password").addEventListener("input", function () {
    const password = this.value;
    const lowerCasePattern = /[a-z]/;
    const numberPattern = /[0-9]/;
    const upperCasePattern = /[A-Z]/;
    const specialCharPattern = /[!@#$%^&*()_+{}|:"<>?,./;'[\]]/;

    updateValidation("upperCase", upperCasePattern.test(password));
    updateValidation("lowerCase", lowerCasePattern.test(password));
    updateValidation("number", numberPattern.test(password));
    updateValidation("specialChar", specialCharPattern.test(password));
});

function valemail(email) {
    var email = document.getElementById("email").value;
    const emailformat = /[!@#$%^&*()_+{}|:"<>?,./;'[\]]/;

    if (email.match(emailformat)) {
        alert("email is valid");
        return true;
    }
    else {
        alert("email is invalid");
        return false;
    }
}
function updateValidation(elementId, isValid) {
    const element = document.getElementById(elementId);
    const icon = element.querySelector("i");

    if (isValid) {
        element.classList.remove("invalid");
        element.classList.add("valid");
        icon.classList.remove("bi-shield-x");
        icon.classList.add("bi-shield-check");
    } else {
        element.classList.remove("valid");
        element.classList.add("invalid");
        icon.classList.remove("bi-shield-check");
        icon.classList.add("bi-shield-x");
    }
}
