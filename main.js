const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    validateInputs();
});

const setError = (element, message) => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector(".invalid");
    const iconDisplay = formControl.querySelector(".invalid-icon");

    errorDisplay.innerText = message;
    formControl.classList.add("invalid");
    iconDisplay.style.visibility = "visible";
    formControl.classList.remove("success");
}

const setSuccess = element => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector(".invalid");
    const iconDisplay = formControl.querySelector(".invalid-icon");

    errorDisplay.innerText = '';
    formControl.classList.add("success");
    iconDisplay.style.visibility = "hidden";
    formControl.classList.remove("invalid");
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();

    if (emailValue === "") {
        setError(email, "Looks like your email is empty");
    } else if ( !isValidEmail(emailValue)) {
        setError(email, "Please provide a valid email");
    } else {
        setSuccess(email);
    }
} 