window.onload = function() {
    loadToDoList(); // Charger la liste de tâches sauvegardée dans les cookies
};

function loadToDoList() {
    var todoList = getCookie("todoList");
    if (todoList) {
        var ft_list = document.getElementById("ft_list");
        ft_list.innerHTML = todoList;
    }
}

function createToDo(){
    var todoText = prompt("Entrez une nouvelle tâche:");
    if (todoText !== null && todoText.trim() !== "") {
        var ft_list = document.getElementById("ft_list");
        var newToDo = document.createElement("div");
        newToDo.textContent = todoText;
        newToDo.addEventListener("click", function() {
            if (confirm("Voulez-vous supprimer cette tâche ?")) {
                this.parentNode.removeChild(this);
                saveToDoList();
            }
        });
        ft_list.insertBefore(newToDo, ft_list.firstChild);
        saveToDoList();
    }
}

function saveToDoList() {
    var ft_list = document.getElementById("ft_list");
    var todoList = ft_list.innerHTML;
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