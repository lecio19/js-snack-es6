//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const array = [
    bike1 = {
        bikeName: 'Gara',
        bikeWeight: 2
    },


    bike2 = {
        bikeName: 'Mtb',
        bikeWeight: 4
    },

    bike3 = {
        bikeName: 'Passeggio',
        bikeWeight: 3
    },

    bike4 = {
        bikeName: 'Trail',
        bikeWeight: 5
    },
]

const min = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i].bikeWeight < min.bikeWeight) {
        min = array[i]
    }
}

console.log(`La bici più leggera è ${min.bikeName} con i suoi ${min.bikeWeight} kg`)