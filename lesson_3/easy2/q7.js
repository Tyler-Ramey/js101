let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let flintstonesArray = Object.entries(flintstones);

let barney = flintstonesArray[2];

console.log(barney);

Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();