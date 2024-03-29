$(document).ready(function() {
    $("button").click(function() {
        // Générer des valeurs aléatoires pour les composantes RGB
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);

        // Créer une couleur RGB aléatoire
        var randomColor = "rgb(" + red + "," + green + "," + blue + ")";

        // Changer la couleur de fond de la page
        $("body").css("background-color", randomColor);
    });
});
