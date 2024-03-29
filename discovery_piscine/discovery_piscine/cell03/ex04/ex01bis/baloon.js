$(document).ready(function() {
    var baloonDiv = $('#baloonDiv');
    var taille = 200;
    var couleurIndex = 0;
    var couleurs = ['red', 'green', 'blue'];

    // Gestionnaire d'événements pour le clic sur la div baloonDiv
    baloonDiv.on('click', function() {
        // Augmenter la taille de la div
        taille += 10;
        if (taille > 420) {
            taille = 200; // Reprendre la taille initiale si elle dépasse 420px
        }
        // Modifier les styles CSS de la div
        baloonDiv.css({
            width: taille + 'px',
            height: taille + 'px',
            backgroundColor: couleurs[couleurIndex]
        });
        couleurIndex = (couleurIndex + 1) % couleurs.length; // Passer à la couleur suivante dans la liste
    });

    // Gestionnaire d'événements pour le mouseleave sur la div baloonDiv
    baloonDiv.on('mouseleave', function() {
        // Réduire la taille de la div de manière répétitive
        reduceSize();
    });

    // Fonction pour réduire la taille de la div de manière répétitive
    function reduceSize() {
        // Diminuer la taille de la div
        taille -= 5;
        if (taille < 200) {
            taille = 200; // La taille ne peut pas être inférieure à 200px
        }
        // Modifier les styles CSS de la div
        baloonDiv.css({
            width: taille + 'px',
            height: taille + 'px',
            backgroundColor: couleurs[couleurIndex]
        });

        // Vérifier si la taille est encore supérieure à 200px
        if (taille > 200) {
            // Planifier une nouvelle réduction de taille après un court délai
            setTimeout(reduceSize, 100); // Réduire la taille toutes les 100 millisecondes (ou ajustez le délai selon vos besoins)
        }

        // Changer la couleur de la div (dans l'ordre inverse)
        couleurIndex = (couleurIndex - 1 + couleurs.length) % couleurs.length;
    }
});
