// Dag 3, del 1: Arrayer och objekt i Console.
import { meny } from './data'
import { studentPris } from './rabatt'

/*
Uppgift 10. Moduler på riktigt
Skapa en ny fil `src/rabatt.ts` med en exporterad funktion `studentPris(pris)` (10 % rabatt). OK
Importera den i `src/main.ts` och använd den på menyn. OK
Prova sedan tre fel med flit och läs felen: ta bort `type="module"` i `index.html`,OK


Tagit bort type:module Moduler fungerar inte om du du
Svar Inget skrivs i console
  Skriv fel filnamn i `import`, och öppna `index.html` genom att dubbelklicka (utan servern). OK

Svar
  Uncaught SyntaxError: The requested module '/src/rabatt.ts' does not provide an export named 'studentPriss' (at main.ts:3:10)
  Anropar studentPris('100A')  Nytt pris NaN not an number
  Skriv vad varje fel betydde. Syntax error

  Sedan studentpris i menyn finns här nedan
  */

console.log(`${'Nytt pris ' + studentPris(100)}  `)

let count: number = 0
console.log('Meny')
for (const dish of meny) {
    console.log(
        `${dish.namn} - ${dish.pris} kr Studentpris: ${studentPris(dish.pris).toFixed(2)} kr`
    )
    count++
}

// UPPGIFT 1: arrayer
// a) skapa const drycker: string[] = ["Bryggkaffe", "Latte", "Te"];
// b) lägg till "Chai" sist med push. Skriv ut listan och längden.
// c) ta bort sista med pop och skriv ut vad som togs bort.
// d) skriv ut platsen för "Latte" (indexOf) och om "Cola" finns (includes).
// e) skriv ut hela listan som en text: drycker.join(", ")
// TODO

const drycker: string[] = ['Bryggkaffe', 'Latte', 'Te']
drycker.push('Chai')
console.log(`${drycker} ${drycker.length}`)

drycker.pop()
console.log(`${drycker[2]} togs bort`)

console.log(
    `Platsen för ${drycker[1]} ${drycker.indexOf(drycker[1])} includes Cola: ${drycker.includes('Cola')}`
)
console.log(`${drycker.join(', ')}  `)

// UPPGIFT 2: objekt
// a) skapa const kopp = { namn: "Latte", pris: 45, vegetarisk: true };
// b) skriv ut kopp.namn och kopp["pris"]

// c) ändra priset till 48, och lägg till egenskapen storlek: "stor"
//    TypeScript klagar på storlek. Beskriv objektet med en interface där storlek är valfri (storlek?: string).
// d) skriv ut Object.keys(kopp)
// TODO

//const kopp = { namn: 'Latte', pris: 45, vegetarisk: true }
//regler för hur ett objekt ser ut, en ritning
interface Kopp {
    namn: string
    pris: number
    vegetarisk: boolean
    storlek?: string
}
// här skapas själva objektet
const kopp: Kopp = { namn: 'Latte', pris: 45, vegetarisk: true }
//Man kan skapa flera efter samma ritning

const kopp2: Kopp = { namn: 'Latte', pris: 45, vegetarisk: true }
const kopp3: Kopp = { namn: 'Latte', pris: 45, vegetarisk: true }

console.log(`Kopp ${kopp.namn} ${kopp['pris']}`)

kopp.pris = 48
kopp.storlek = 'stor'
//skriv ut Object.keys(kopp)

console.log(`Kopp Oject.keys: ${Object.keys(kopp)}`)
console.log(`kopp ${kopp}`)
// Alternativ formaterad JSON-text
console.log(JSON.stringify(kopp, null, 2))

// Vanligt objekt utan interface
const tea = {
    namn: 'Chai',
    pris: 42,
    vegetarisk: true,
    storlek: '' // Måste finnas med från start om du vill ändra den sen
}

//Ändra efteråt
tea.pris = 45
tea.storlek = 'stor'

console.log(tea)

//import { meny } from './data'
/*  FROM dat-ts
export const meny: Ratt[] = [
  { id: 1, namn: "Kardemummabulle", pris: 35, kategori: "bakverk", vegetarisk: true, bild: "images/bulle.svg", beskrivning: "Bakad på färsk kardemumma och pärlsocker." },
  { id: 2, namn: "Bryggkaffe", pris: 32, kategori: "dryck", vegetarisk: true, bild: "images/kaffe.svg", beskrivning: "Lokalrostat, med fri påtår." },
  { id: 3, namn: "Ostmacka", pris: 59, kategori: "lunch", vegetarisk: true, bild: "images/smorgas.svg", beskrivning: "Surdegsbröd, lagrad ost och krispig sallad." },
  { id: 4, namn: "Skinkmacka", pris: 62, kategori: "lunch", vegetarisk: false, bild: "images/smorgas.svg", beskrivning: "Surdegsbröd, kokt skinka och senap." },
  { id: 5, namn: "Latte", pris: 45, kategori: "dryck", vegetarisk: true, bild: "images/kaffe.svg", beskrivning: "Espresso med ångad mjölk." },
  { id: 6, namn: "Kanelbulle", pris: 33, kategori: "bakverk", vegetarisk: true, bild: "images/bulle.svg", beskrivning: "Klassikern, bakad varje morgon." },
  { id: 7, namn: "Quiche med lax", pris: 79, kategori: "lunch", vegetarisk: false, bild: "images/smorgas.svg", beskrivning: "Mördegsbotten, lax och dill." },
  { id: 8, namn: "Chokladboll", pris: 25, kategori: "bakverk", vegetarisk: true, bild: "images/bulle.svg", beskrivning: "Havre, kakao och kokos." },
];
*/
let counter: number = 0
for (const dish of meny) {
    console.log(`${dish.namn} - ${dish.pris} kr`)
    counter++
}
let last: number = 0
last = meny.length - 1

console.log(last)
console.log(` ${counter} rätter i menyn, första är ${meny[0].namn} `)
console.log(
    ` ${counter} rätter i menyn, sista är ${meny[meny.length - 1].namn} `
)
