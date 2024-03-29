var baloonDiv = document.getElementById('baloonDiv');
var taille = 200;
var couleurIndex = 0;
var couleurs = ['red', 'green', 'blue'];

baloonDiv.addEventListener('click', function() {
    // Augmenter la taille de la div
    taille += 10;
    if (taille > 420) {
        taille = 200; // Reprendre la taille initiale si elle dépasse 420px
    }
    baloonDiv.style.width = taille + 'px';
    baloonDiv.style.height = taille + 'px';

    // Changer la couleur de la div
    baloonDiv.style.backgroundColor = couleurs[couleurIndex];
    couleurIndex = (couleurIndex + 1) % couleurs.length; // Passer à la couleur suivante dans la liste
});

// Événement mouseleave pour la div baloonDiv
baloonDiv.addEventListener('mouseleave', function() {
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
    baloonDiv.style.width = taille + 'px';
    baloonDiv.style.height = taille + 'px';

    // Vérifier si la taille est encore supérieure à 200px
    if (taille > 200) {
        // Planifier une nouvelle réduction de taille après un court délai
        setTimeout(reduceSize, 100); // Réduire la taille toutes les 100 millisecondes (ou ajustez le délai selon vos besoins)
    }

    // Changer la couleur de la div (dans l'ordre inverse)
    couleurIndex = (couleurIndex - 1 + couleurs.length) % couleurs.length;
    baloonDiv.style.backgroundColor = couleurs[couleurIndex];
}