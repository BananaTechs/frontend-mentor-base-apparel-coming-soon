document.querySelector("form input").addEventListener("input", event => {
    if (event.target.validity.valid) {
        applyToErrors(obj => obj.classList.add("hidden"));
    } else {
        applyToErrors(obj => obj.classList.remove("hidden"));
    }
});

function applyToErrors(f) {
    document.querySelectorAll(".error").forEach(f);
}