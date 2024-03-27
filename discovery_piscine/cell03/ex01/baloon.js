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

baloonDiv.addEventListener('mouseenter', function() {
    // Diminuer la taille de la div
    taille -= 5;
    if (taille < 200) {
        taille = 200; // La taille ne peut pas être inférieure à 200px
    }
    baloonDiv.style.width = taille + 'px';
    baloonDiv.style.height = taille + 'px';

    // Changer la couleur de la div (dans l'ordre inverse)
    couleurIndex = (couleurIndex - 1) % couleurs.length;
    if (couleurIndex < 0) {
        couleurIndex = couleurs.length - 1; // Revenir à la dernière couleur dans la liste
    }
    baloonDiv.style.backgroundColor = couleurs[couleurIndex];
});