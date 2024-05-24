const squadreCalcio = [
    { 
        nome: "Juventus", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },
    { 
        nome: "Inter", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },
    { 
        nome: "Milan", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },
    { 
        nome: "Roma", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },
    { 
        nome: "Napoli", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },
    { 
        nome: "Lazio", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },
    { 
        nome: "Fiorentina", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },
    { 
        nome: "Atalanta", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },
    { 
        nome: "Torino", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },
    { 
        nome: "Sampdoria", 
        puntiFatti: 0, 
        falliSubiti: 0 
    }
];

function getRandomNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

console.log(getRandomNumber(1, 10))