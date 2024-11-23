const maleCheckbox = document.getElementById("male");
const femaleCheckbox = document.getElementById("female");

maleCheckbox.addEventListener("change", function() {
    if (maleCheckbox.checked) {
        femaleCheckbox.checked = false;
    }
});

femaleCheckbox.addEventListener("change", function() {
    if (femaleCheckbox.checked) {
        maleCheckbox.checked = false;
    }
});