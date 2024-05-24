const fashionArticlesList = [
    {
        name: "Poppy",
        type: "tshirt",
        color: "red",
    },
    {
        name: "Jumping",
        type: "occhiali",
        color: "blue",
    },
    {
        name: "CrissCross",
        type: "scarpe",
        color: "black",
    },
    {
        name: "Jenny",
        type: "borsa",
        color: "pink",
    },
];

const containerEl = document.querySelector(".container>section");
const listEl = document.createElement("ul")
containerEl.appendChild(listEl);

const fashionLabeledArticles = [];
fashionArticlesList.forEach((article) => {
    const {name, type, color, position} = article
    article.position = getRandomAlphabetLetter();
    fashionLabeledArticles.push(article);
});

fashionLabeledArticles.sort((a, b) => {
    return a.position.localeCompare(b.position);
});

fashionLabeledArticles.sort().forEach((article) => {
    const {name, type, color, position} = article
    const printEl = document.createElement("li");
    listEl.appendChild(printEl);
    printEl.append(`Nome: ${name}, tipologia: ${type}, colore: ${color}, cartellino: ${position}`);
});

console.log(fashionLabeledArticles);


// console.log(getRandomAlphabetLetter());

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


