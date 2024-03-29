document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.getElementById("custom-select");

    for (var i = 0; i < selectElement.options.length; i++) {
        var option = selectElement.options[i];
        if (option.textContent.includes("OK")) {
            option.style.backgroundColor = "green";
        } else if (option.textContent.includes("NON")) {
            option.style.backgroundColor = "red";
        }
    }
});