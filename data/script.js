// ********** "GUESS MY NUMBER" GAME **********

let maximumNumber = parseInt(prompt("Choisis un nombre maximum."));
let attempts = 0;

while (!maximumNumber) {
    maximumNumber = parseInt(prompt("Tu dois choisir un nombre valide."));
}

const randomNumber = Math.floor(Math.random() * maximumNumber) + 1;
let guessedNumber = prompt(`Un nombre aléatoire entre 1 et ${maximumNumber} vient d'être généré. Devine lequel c'est ! (Tu peux quitter à tout moment en tappant "q")`).toLowerCase();

while (guessedNumber != randomNumber) {
    if (guessedNumber < randomNumber) {
        attempts++;
        guessedNumber = prompt(`${guessedNumber} est trop petit ! Essaie encore... (Tentative N°${attempts})`).toLowerCase();
    } else if (guessedNumber > randomNumber) {
        attempts++;
        guessedNumber = prompt(`${guessedNumber} est trop grand ! Essaie encore... (Tentative N°${attempts})`).toLowerCase();
    } else {
        if (guessedNumber === "q" || guessedNumber === "quit" || guessedNumber === "quitter") {
            break;
        } else {
            attempts += 10;
            guessedNumber = prompt(`T'as essayé de m'arnaquer, là ! Il t'en coûtera 10 tentatives ! (Tentative N°${attempts})`).toLowerCase();
        }
    }
}

if (guessedNumber === "q" || guessedNumber === "quit" || guessedNumber === "quitter") {
    alert(`Tu as quitté la partie après ${attempts} tentatives. La solution était ${randomNumber}.`);
} else {
    attempts++;
    alert(`Bravo ! Tu as trouvé le nombre ${randomNumber} après ${attempts} tentatives !`);
}

// ********** FONCTIONS DE LA PAGE **********

const rating = (value) => {
    if (value === 5) {
        alert("Merci ! Je savais que ça te plairait !")
    } else {
        alert(`Tu t'es trompé de bouton ! Il faut cliquer sur "5 étoiles" !`)
    }
}

const newGame = () => {
    document.location.reload();
}