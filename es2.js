// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const min = 0;
const maxFouls = 20;
const maxPoints = 150;

const teams = [
    team1 = {
        name: 'Lakers',
        points: 0,
        fouls: 0
    },
    team2 = {
        name: 'Cavaliers',
        points: 0,
        fouls: 0
    },
    team3 = {
        name: 'Heat',
        points: 0,
        fouls: 0
    },
]

const newArray = []

for (let i = 0; i < teams.length; i++) {
    teams[i].fouls = randomizer(min, maxFouls);
    teams[i].points = randomizer(min, maxPoints);
}

console.log(teams)

for (let i = 0; i < teams.length; i++) {
    let obj = {
        name: teams[i].name,
        fouls: teams[i].fouls
    }
    newArray.push(obj);
}

console.log(newArray)

function randomizer(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}