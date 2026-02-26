let gameFinished = false;

function checkCode(correctCode, nextPage) {
    const userInput = document.getElementById("codeInput").value;
    const errorMessage = document.getElementById("errorMessage");

    if (userInput === correctCode) {
        window.location.href = nextPage;
    } else {
        errorMessage.textContent = "Ce n’est pas le bon code voyons doudou…";
    }
}

// Confetti (vraie action)
function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.backgroundColor =
            "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-10px";
        confetti.style.opacity = Math.random();
        confetti.style.transform = "rotate(" + Math.random() * 360 + "deg)";
        confetti.style.transition = "top 3s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.top = window.innerHeight + "px";
        }, 10);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function showImage() {
    document.getElementById("billetImage").classList.remove("hidden");
}

function realClick() {
    launchConfetti();
    showImage();

    // On considère que le jeu est fini
    gameFinished = true;

    // Supprime le faux message s'il existe
    document.getElementById("fakeMessage").textContent = "";

    // Affiche le message final
    document.getElementById("finalMessage").textContent =
        "MERCI ! Tu as retrouvé mon document perdu ! Bon, ce n'est plus une surprise mais au moins tu as pu jouer un peu... Bisous loustique";

    // Supprime tous les boutons indice et textes indice
const hints = document.querySelectorAll(".hint, .hint-button");
hints.forEach(element => element.remove());
}

// Faux bouton
function fakeFirework() {
    for (let i = 0; i < 80; i++) {
        let fire = document.createElement("div");
        fire.style.position = "fixed";
        fire.style.width = "8px";
        fire.style.height = "8px";
        fire.style.backgroundColor =
            "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        fire.style.left = window.innerWidth / 2 + "px";
        fire.style.top = window.innerHeight / 2 + "px";
        fire.style.borderRadius = "50%";
        fire.style.transition = "all 1s ease-out";

        document.body.appendChild(fire);

        setTimeout(() => {
            fire.style.left =
                window.innerWidth / 2 +
                (Math.random() - 0.5) * 600 + "px";
            fire.style.top =
                window.innerHeight / 2 +
                (Math.random() - 0.5) * 600 + "px";
            fire.style.opacity = "0";
        }, 10);

        setTimeout(() => {
            fire.remove();
        }, 1000);
    }

    // Message seulement si le jeu n'est pas fini
    if (!gameFinished) {
        document.getElementById("fakeMessage").textContent =
            "ouueeee pas mal le feu d'artifice, mais je n'ai toujours pas mon document moi...";
    }
}

function toggleHint(id) {
    const hint = document.getElementById(id);
    if (hint.style.display === "block") {
        hint.style.display = "none";
    } else {
        hint.style.display = "block";
    }
}
