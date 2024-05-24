const fashionArticlesList = [
    {
        name: "Poppy",
        type: "tshirt",
        color: "red",
    },
    {
        name: "Poppy",
        type: "tshirt",
        color: "red",
    },
    {
        name: "Poppy",
        type: "tshirt",
        color: "red",
    },
    {
        name: "Poppy",
        type: "tshirt",
        color: "red",
    },
];





// ----------FUNCTIONS------------

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomAlphabetLetter(){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const randomNumber = getRandomNumber(0, 25);
    const randomLetter = alphabet[randomNumber];
    return randomLetter
}



console.log(getRandomAlphabetLetter());