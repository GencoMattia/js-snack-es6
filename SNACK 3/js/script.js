const racingBikes = [
    { 
        name: "Bianchi Oltre XR4", 
        weight: 6.8 
    },
    { 
        name: "Cannondale SuperSix EVO", 
        weight: 7.1 
    },
    { 
        name: "Specialized S-Works Tarmac", 
        weight: 6.7 
    },
    { 
        name: "Trek Emonda SLR", 
        weight: 6.5 
    },
    { 
        name: "Cervelo R5", 
        weight: 6.9 
    },
    { 
        name: "Pinarello Dogma F12", 
        weight: 7.0 
    },
    { 
        name: "Giant TCR Advanced SL", 
        weight: 6.8 
    },
    { 
        name: "Scott Addict RC", 
        weight: 6.7 
    },
    { 
        name: "Colnago V3Rs", 
        weight: 6.9 
    },
    { 
        name: "Wilier Triestina Zero SLR", 
        weight: 6.6 
    }
];

let lightestBike;

racingBikes.forEach((bike, index) => {
    let isBikeLightest = true;
    racingBikes.forEach((otherBike, otherIndex) => {
        if(index !== otherIndex && bike.weight > otherBike.weight) {
            isBikeLightest = false;
        }
    });
    if(isBikeLightest === true){
        lightestBike = bike;
    }
});

const { name, weight } = lightestBike;

const containerEl = document.querySelector(".container>section");
const printEl = document.createElement("p");
containerEl.appendChild(printEl);
printEl.append(`La bici più leggera è ${name} con un peso di ${weight}Kg.`)

console.log(containerEl)

console.log(`La bici più leggera è ${name} con un peso di ${weight}Kg.`);