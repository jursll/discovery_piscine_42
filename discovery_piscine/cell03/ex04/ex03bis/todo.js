$(document).ready(function() {
    loadToDoList(); // Charger la liste de tâches sauvegardée dans les cookies
});

function loadToDoList() {
    var todoList = getCookie("todoList");
    if (todoList) {
        $("#ft_list").html(todoList);
    }
}

function createToDo(){
    var todoText = prompt("Entrez une nouvelle tâche:");
    if (todoText !== null && todoText.trim() !== "") {
        var newToDo = $("<div></div>").text(todoText).addClass("todo");
        newToDo.on("click", function() {
            if (confirm("Voulez-vous supprimer cette tâche ?")) {
                $(this).remove();
                saveToDoList();
            }
        });
        $("#ft_list").prepend(newToDo);
        saveToDoList();
    }
}

function saveToDoList() {
    var todoList = $("#ft_list").html();
    setCookie("todoList", todoList, 365); // Sauvegarder la liste de tâches dans les cookies
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
