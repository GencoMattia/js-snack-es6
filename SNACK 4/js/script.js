const squadreCalcio = [
    { 
        nome: "Juventus", 
        puntiFatti: getRandomNumber(1, 100), 
        falliSubiti: getRandomNumber(1, 100) 
    },
    { 
        nome: "Inter", 
        puntiFatti: getRandomNumber(1, 100), 
        falliSubiti: getRandomNumber(1, 100) 
    },
    { 
        nome: "Milan", 
        puntiFatti: getRandomNumber(1, 100), 
        falliSubiti: getRandomNumber(1, 100) 
    },
    { 
        nome: "Roma", 
        puntiFatti: getRandomNumber(1, 100), 
        falliSubiti: getRandomNumber(1, 100) 
    },
    { 
        nome: "Napoli", 
        puntiFatti: getRandomNumber(1, 100), 
        falliSubiti: getRandomNumber(1, 100) 
    },
    { 
        nome: "Lazio", 
        puntiFatti: getRandomNumber(1, 100), 
        falliSubiti: getRandomNumber(1, 100) 
    },
    { 
        nome: "Fiorentina", 
        puntiFatti: getRandomNumber(1, 100), 
        falliSubiti: getRandomNumber(1, 100) 
    },
    { 
        nome: "Atalanta", 
        puntiFatti: getRandomNumber(1, 100), 
        falliSubiti: getRandomNumber(1, 100) 
    },
    { 
        nome: "Torino", 
        puntiFatti: getRandomNumber(1, 100), 
        falliSubiti: getRandomNumber(1, 100) 
    },
    { 
        nome: "Sampdoria", 
        puntiFatti: getRandomNumber(1, 100), 
        falliSubiti: getRandomNumber(1, 100) 
    }
];

function getRandomNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

console.log(squadreCalcio)