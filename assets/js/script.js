let buttonSumit = document.querySelector('#submitbutton');
let display = document.querySelector('.modal');
let img = document.querySelector('#masquer');

buttonSumit.addEventListener('click', function () {
    let username = document.querySelector('#user')
    if (username.value === '') {
        console.log('pas de pseudo');
    }
    else {
        display.style.display = 'none';
    }
});


img.addEventListener('click', () => {
    img.style.transform = 'scale(1.3)'
})

// TUTO MENU BURGER
let sidenav = document.querySelector('#mySidenav');
let openBtn = document.querySelector('#openBtn');
let closeBtn = document.querySelector('#closeBtn');

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
    sidenav.classList.add('active');
}

function closeNav() {
    sidenav.classList.remove('active');
}
// FIN DU TUTO

// let userSelection = null
// let botSelection = Math.flor(Math.random*3)

// let caillou =document.querySelector('#pierre')
// let papier =document.querySelector('#papier')
// let ciseaux =document.querySelector('#ciseaux')

// if (caillou.onclick = 
//     userSelection= 0
// )

// if (papier.onclick = 
//     userSelection= 1
// )

// if (ciseaux.onclick = 
//     userSelection= 2
// )

// if(userSelection === botSelection){
//     console.log('egality');
// }

// if(userSelection === botSelection){
//     console.log('egality');
// }



// TUTO PIERRE FEUILLE CISEAU

const contenantChoixBot = document.getElementById('#choix-bot');
const contenantChoixUser = document.getElementById('#choix-user');
const contenantResult = document.getElementById('#result');

const choixPossibles = document.querySelectorAll('.buttonjeu');
let choixUser
let result
let choixBot
let random
let affiche = document.querySelector('.afficher');

let score = 0
let scoreBot = 0
// choixPossibles.forEach(el => {
//     console.log(el);

// })

// EVENT CLIC BTN
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click', (e) => {
    console.log(choixPossible);
    // récupération id btn cliqué
    choixUser = e.target.id;
    generer_choix_bot();
    verif();
}))

// Fonction pour générer choix bot
function generer_choix_bot() {
    random = Math.floor(Math.random() * 3) + 1

    if (random === 1) {
        choixBot = 'pierre';
    }
    if (random === 2) {
        choixBot = 'papier';
    }
    if (random === 3) {
        choixBot = 'ciseaux';
    }
}

// contenantChoixBot.innerHTML = `<img src=./assets/img/caillou.png"${choixUser}.png">`


// Function vérif Win
function verif() {
    console.log(choixUser, choixBot);
    if (choixUser == choixBot) {
        result = 'Egality!';
    }
    // cas ou User Loose
    if (choixUser == "pierre" && choixBot == 'papier') {
        result = `Loose! Your Score ${score} | Ennemie Score ${scoreBot}`;
        scoreBot += 1;
    }
    if (choixUser == "papier" && choixBot == 'ciseaux') {
        result = `Loose! Your Score ${score} | Ennemie Score ${scoreBot}`;
        scoreBot += 1;
    }
    if (choixUser == "ciseaux" && choixBot == 'pierre') {
        result = `Loose! Your Score ${score} | Ennemie Score ${scoreBot}`;
        scoreBot += 1;
    }

    // cas ou User Win
    if (choixUser == 'pierre' && choixBot == 'ciseaux') {
        result = `Win! Your Score ${score} | Ennemie Score ${scoreBot}`;
        score += 1;
    }
    if (choixUser == 'ciseaux' && choixBot == 'papier') {
        result = `Win! Your Score ${score} | Ennemie Score ${scoreBot}`;
        score += 1;
    }
    if (choixUser == 'papier' && choixBot == 'pierre') {
        result = `Win! Your Score ${score} | Ennemie Score ${scoreBot}`;
        score += 1;
    }
    if (score >= 10 || scoreBot >= 10) {
        affiche.textContent = `Partie finie | ${score} | ${scoreBot}`
        return false;
    }
    else {
        console.log(result);
        let affiche = document.querySelector('.afficher')
        affiche.innerHTML = result
    }
}

// let scoreBtn=document.querySelector('#scoreBtn');
// let reset=document.querySelector('#reset');

// scoreBtn.addEventListener('click', function(){
//     score = 0;
//     scoreBot = 0;
//     reset.textContent= score;
//     reset.textContent= scoreBot;
//     console.log('coucou');
// })

let rejouerBtn = document.querySelector('#rejouerBtn');

// Gestionnaire d'événement pour le bouton Rejouer
rejouerBtn.addEventListener('click', function () {
    score = 0;
    scoreBot = 0;
    result = 'Nouvelle Partie !';
    let affiche = document.querySelector('.afficher');
    affiche.innerHTML = result;
    console.log('Nouvelle partie démarrée');
});


// function getRandomChoice() {
//     let choices = ["pierre", "papier", "ciseaux"];
//     return choices[Math.floor(Math.random() * choices.length)];
// }