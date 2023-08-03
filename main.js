function sayThankYou(event) {
    event.preventDefault();
    const messagePop = document.getElementById('thank__you');
    messagePop.innerHTML = " ✔ Thank you!";

    setTimeout(function () {
        messagePop.style.opacity = 0;
        setTimeout(function () {
            messagePop.style.display = "none";
        }, 500); 
    }, 2000);
}


const form = document.getElementById('form-ty')

form.addEventListener('submit', sayThankYou);