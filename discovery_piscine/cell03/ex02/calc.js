function calculate() {
    // Récupérer les éléments du formulaire
    var leftOperand = document.getElementById('leftOperand').value;
    var operator = document.getElementById('operator').value;
    var rightOperand = document.getElementById('rightOperand').value;

    // Vérifier si les opérandes sont des entiers positifs
    if (!isPositiveInteger(leftOperand) || !isPositiveInteger(rightOperand)) {
        alert('Error :(');
        console.log('Error :(');
        return;
    }

    // Effectuer le calcul
    var result;
    switch (operator) {
        case '+':
            result = parseInt(leftOperand) + parseInt(rightOperand);
            break;
        case '-':
            result = parseInt(leftOperand) - parseInt(rightOperand);
            break;
        case '*':
            result = parseInt(leftOperand) * parseInt(rightOperand);
            break;
        case '/':
            if (parseInt(rightOperand) === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            result = parseInt(leftOperand) / parseInt(rightOperand);
            break;
        case '%':
            if (parseInt(rightOperand) === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            result = parseInt(leftOperand) % parseInt(rightOperand);
            break;
        default:
            alert('Invalid operator');
            console.log('Invalid operator');
            return;
    }

    // Afficher le résultat dans une fenêtre d'alerte et dans la console
    alert('Le résultat est : ' + result);
    console.log('Le résultat est : ' + result);
}

function isPositiveInteger(value) {
    // Vérifie si la valeur est un entier positif
    return /^\d+$/.test(value) && parseInt(value) >= 0;
}

// Afficher un message d'alerte toutes les 30 secondes
setInterval(function() {
    alert('Please, use me...');
}, 30000);